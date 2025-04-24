import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(200)),
    ]),
  ],
})
export class MessagesComponent implements OnInit, AfterViewChecked {
  /* ---------------- template ref ---------------- */
  @ViewChild('scrollMessages') private scrollBox?: ElementRef<HTMLDivElement>;

  /* ---------------- state ---------------- */
  inboxOpen = false;
  chatOpen = false;
  message = '';
  search = '';
  people: any[] = [];
  searching = false;
  chat: any = null;
  loading   = false;   //  ← add


  /* ---------------- subs ---------------- */
  private search$?: Subscription;

  /* ---------------- user & api ---------------- */
  user = this.api.getUserData();

  constructor(private api: APIService, private router: Router) {}

  /* ---------------- lifecycle ---------------- */
  ngOnInit(): void {
    this.api.getConversations();
  }

  ngAfterViewChecked(): void {
    if (this.scrollBox) {
      this.scrollBox.nativeElement.scrollTop =
        this.scrollBox.nativeElement.scrollHeight;
    }
  }

  /* ---------------- UI actions ---------------- */
  openInbox() {
    this.inboxOpen = true;
  }

  closeInbox() {
    this.inboxOpen = false;
    // remove the auxiliary route so URL reverts
    this.router.navigate([{ outlets: { modal: null } }]);
  }

  closeChat() {
    this.chatOpen = false;
    this.chat = null;
    this.api.chat = null;
    this.api.getConversations();
  }

  /* ---------------- search ---------------- */
 searchPeople(ev: KeyboardEvent) {
  const term = (ev.target as HTMLInputElement).value.trim().toLowerCase();
  this.people = [];
  if (!term) return;

  this.loading   = true;          //  ← start spinner
  this.searching = true;
  this.search$?.unsubscribe();

  this.search$ = this.api.searchPeople(term).subscribe(res => {
    this.searching = false;
    this.loading   = false;       //  ← stop spinner

    if (res.success) {
      this.people = res.output.map((p: any) => ({
        ...p,
        lastseen: this.getTimeOnline(p.lastseen),
      }));
    }
    this.search$?.unsubscribe();
  });
}

  /* ---------------- chat ---------------- */
  openChatModal(person: any) {
    this.api.messages = [];
    this.chat = person;
    this.api.chat = person;
    this.people = [];
    this.search = '';
    this.api.getMessages(person.id);
    this.chatOpen = true;
  }

  sendMessage() {
    if (!this.message.trim()) return;

    this.api.messages.push({
      senderid: this.user.id,
      recipientid: this.chat.id,
      message: this.message,
    });
    this.api.sendMessage(this.message, this.chat.id);

    if (
      this.chat.lastseen !== 'Just now' &&
      this.chat.lastseen !== '1 minute ago'
    ) {
      this.api.pushNotifications(
        `${this.api.getFullName()} sent a message`,
        this.message,
        this.chat.id
      );
    }
    this.message = '';
  }

  /* ---------------- helpers ---------------- */
  getConvos() {
    return this.api.convos;
  }

  getMessages() {
    return this.api.messages;
  }

  getUrl(file: string) {
    return this.api.getURL(file) ?? this.api.noProfile();
  }

  getTimeOnline(date: string) {
    return this.api.parseDateFromNow(date);
  }
}
