import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatemeetComponent } from '../teacher-modals/createmeet/createmeet.component';
import { APIService } from 'src/app/services/API/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class CommunicationComponent implements OnInit {

  /* ============ ALERT & BROADCAST ============ */
  comtypes = ['Urgent', 'Minor'];

  broadcast         = '';
  broadcastContent: any = null;
  broadcastType     = this.comtypes[0];
  classToBroadcast: any = null;

  alertDesc    = '';
  alertMessage = '';
  alertType    = this.comtypes[0];
  classToAlert:any = null;

  /* dropdown data */
  languages:any[] = [];
  courses  :any[] = [];
  classes  :any[] = [];

  user = this.api.getUserData();

  constructor(private modal: NgbModal,
              private api: APIService) {}

  ngOnInit(): void {
    this.api.getLanguages().subscribe(r => { if (r.success) this.languages = r.output; });
    this.api.getClasses  ().subscribe(r => { if (r.success) this.classes   = r.output; });
  }

  /* ---------- label getters ---------- */
  get broadcastClassLabel(): string {
    return this.classToBroadcast
      ? `${this.classToBroadcast.course} – ${this.classToBroadcast.class}`
      : 'Select Class';
  }
  get alertClassLabel(): string {
    return this.classToAlert
      ? `${this.classToAlert.course} – ${this.classToAlert.class}`
      : 'Select Class';
  }

  /* --------- Alert helpers --------- */
  setAlertClass(c:any){ this.classToAlert = c; }
  setAlertType (t:string){ this.alertType = t; }

  sendAlert():void{
    if(!this.api.checkInputs([this.alertDesc,this.alertMessage,this.alertType,this.classToAlert])){
      this.api.failedSnackbar('Please complete the fields before sending an alert.');
      return;
    }
    this.api.notifyStudentsInClass(
      `[ALERT]${this.alertType=='Urgent'?'URGENT! ':''}${this.api.getFullName()}
       sent an alert to <b>${this.classToAlert.class}</b>!`,
      `<div class='broadcast-message'>
         <div class='title'>🎉 ${this.alertDesc} 🎉</div>
         <div class='message'>${this.alertMessage}</div>
         <p class="text-sm text-gray-500">${this.api.getFullName()}</p>
         <p class="text-sm"><b>${this.classToAlert.course}</b></p>
       </div>`,
      this.classToAlert.id
    );
    this.api.successSnackbar('Successfully sent an alert to class');
    this.alertDesc = this.alertMessage = '';
  }

  /* --------- Broadcast helpers --------- */
  setBroadcastClass(c:any){ this.classToBroadcast = c; }
  setBroadcastType(t:string){ this.broadcastType = t; }

  handleFileSelect(e:any){
    if(e.target.files.length) this.broadcastContent = e.target.files[0];
  }
  getBroadcastFilename(){ return `Attached: ${this.broadcastContent.name}`; }

  sendBroadcast():void{
    if(!this.api.checkInputs([this.broadcast,this.broadcastContent,this.broadcastType,this.classToBroadcast])){
      this.api.failedSnackbar('Please complete the fields before sending a broadcast.');
      return;
    }
    this.api.uploadFileWithProgress(this.broadcastContent, this.broadcastContent.name);
    this.api.notifyStudentsInClass(
      `[BROADCAST]${this.broadcastType=='Urgent'?'URGENT! ':''}${this.api.getFullName()}
       sent a broadcast to <b>${this.classToBroadcast.class}</b>!`,
      `<div class='broadcast-message'>
         🎉 ${this.broadcast} 🎉<br>
         <audio controls src='${this.api.getURL('files/'+this.broadcastContent.name)}'></audio><br>
         <p class="text-sm text-gray-500">${this.api.getFullName()}</p>
         <p class="text-sm"><b>${this.classToBroadcast.course}</b></p>
       </div>`,
      this.classToBroadcast.id
    );
    this.api.successSnackbar('Sent broadcast!');
    this.broadcast = '';
    this.broadcastContent = null;
  }

  /* --------- optional course/language selectors --------- */
  selectedlanguage:any; selectedcourse:any; selectedclass:any;

  selectLanguage(l:any){
    this.selectedlanguage = l;
    this.api.getCoursesByLanguage(l.id).subscribe(r=>{
      if(r.success) this.courses = r.output;
    });
  }
  selectCourse(c:any){
    this.selectedcourse = c;
    this.api.teacherGetClassesByCourse(c.id).subscribe(r=>{
      if(r.success) this.classes = r.output;
    });
  }
  selectClass(cls:any){
    this.selectedclass = cls;
    this.api.setClass(cls.id);
  }

  /* ============ CHAT CODE REMAINS COMMENTED ============ */
  /*
  … all chat properties & methods here …
  */
}
