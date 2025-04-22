import { AfterContentInit, Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupQuizPageComponent } from 'src/app/components/student/popup-quiz-page/popup-quiz-page.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { APIService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements AfterContentInit, AfterViewInit {
  [x: string]: any;
  @Input() link: string = '';
  @Input() interactive: boolean = false;
  @Input() timestamp: number = 0;
  @Input() quizID: string = '';
  @Input() deadline: string = '';

  @ViewChild('videoPlayer') videoPlayerRef!: ElementRef<HTMLVideoElement>;

  countdown: number = 3;
  showCountdown: boolean = false;
  quizShown: boolean = false;

  constructor(
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private apiService: APIService
  ) {}

  ngAfterContentInit(): void {
    // No longer setting up the video here; moved to ngAfterViewInit
  }

  ngAfterViewInit(): void {
    if (this.interactive && this.isVideoFile()) {
      this.setupInteractiveVideo();
    }
  }

  setupInteractiveVideo(): void {
    if (!this.videoPlayerRef || !this.videoPlayerRef.nativeElement) {
      console.error('Video player element is not available');
      return;
    }
    const videoPlayer = this.videoPlayerRef.nativeElement;
    videoPlayer.addEventListener('timeupdate', () => {
      this.checkTimestamp(videoPlayer);
    });
  }

  checkTimestamp(videoPlayer: HTMLVideoElement): void {
    if (this.interactive && !this.quizShown) {
      if (videoPlayer.currentTime >= this.timestamp) {
        videoPlayer.pause();
        this.checkAndShowQuiz(videoPlayer);
        this.quizShown = true;
      }
    }
  }

  async checkAndShowQuiz(videoPlayer: HTMLVideoElement): Promise<void> {
    const currentDate = new Date();
    const quizDeadline = new Date(this.deadline);

    if (currentDate > quizDeadline) {
      this.apiService.failedSnackbar('You cannot take the exam, it is already due date.');
      return;
    }

    try {
      const studentID = this.apiService.getUserData()?.id;
      if (!studentID) {
        this.apiService.failedSnackbar('Unable to fetch student ID.');
        return;
      }

      const quizScores = await this.apiService.getMyQuizScores(this.quizID);

      if (quizScores && quizScores.output.length > 0) {
        const scoreData = quizScores.output[0];
        if (scoreData.takenpoints !== null) {
          this.apiService.successSnackbar(
            `You have already completed this quiz. Score: ${scoreData.takenpoints}/${scoreData.totalpoints}`
          );
          return;
        }
      }

      this.startCountdown(videoPlayer);
    } catch (error) {
      console.error('Error fetching quiz scores:', error);
      this.apiService.failedSnackbar('Failed to fetch quiz scores. Please try again.');
    }
  }

  startCountdown(videoPlayer: HTMLVideoElement): void {
    this.showCountdown = true;
    const interval = setInterval(() => {
      this.countdown -= 1;
      if (this.countdown <= 0) {
        clearInterval(interval);
        this.showCountdown = false;
        this.showQuizModal(this.quizID, videoPlayer);
        this.countdown = 3;
      }
    }, 1000);
  }

  /**
   * Resumes the video at the quiz timestamp without skipping ahead.
   * Ensures the video resumes exactly from the point it was paused.
   */
  resumeVideoAtTime(videoPlayer: HTMLVideoElement): void {
  if (!videoPlayer) {
    console.warn('Video player is not ready');
    return;
  }

  // Log the timestamp for debugging
  console.log(`Resuming video at timestamp: ${this.timestamp}s`);

  // Pause the video to ensure we are in control of the current time
  videoPlayer.pause();

  // Set the currentTime to the timestamp value
  videoPlayer.currentTime = this.timestamp;

  // Add a slight delay to allow the browser to register the new time
  setTimeout(() => {
    // Play the video from the specified timestamp
    videoPlayer.play().then(() => {
      console.log(`Video started at timestamp: ${this.timestamp}s`);
    }).catch((err) => {
      console.warn('Autoplay blocked or error during playback:', err);
    });
  }, 50);  // Add a small delay before playing (50ms)
}


  showQuizModal(quizID: string, videoPlayer: HTMLVideoElement): void {
    console.log('Opening quiz modal with quizID:', quizID);
    const modalRef = this.modalService.open(PopupQuizPageComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'modal-fullscreen-sm-down'
    });

    modalRef.componentInstance.quizID = quizID;
    this.apiService.quizID = quizID;

    modalRef.result.then(
      () => this.resumeVideoAtTime(videoPlayer),   // closed
      () => this.resumeVideoAtTime(videoPlayer)    // dismissed
    ).catch((error) => {
      console.error('Modal result promise rejected:', error);
    });
  }

  close() {
    this.activeModal.dismiss();
  }

  downloadFile() {
    this.http.get(this.link, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = this.getFileName();
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }

  getFileName(): string {
    return this.link.split('/').pop() || 'File';
  }

  isVideoFile(): boolean {
    return /\.(mp4|webm|ogg)$/i.test(this.link);
  }

  isPdfFile(): boolean {
    return /\.pdf$/i.test(this.link);
  }

  isImageFile(): boolean {
    return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(this.link);
  }

  isPowerPointFile(): boolean {
    return /\.(ppt|pptx)$/i.test(this.link);
  }

  isDocFile(): boolean {
    return /\.(doc|docx)$/i.test(this.link);
  }

  isExcelFile(): boolean {
    return /\.(xls|xlsx|xlsm)$/i.test(this.link);
  }

  isTextFile(): boolean {
    return /\.(txt)$/i.test(this.link);
  }

  isHtmlFile(): boolean {
    return /\.(html|htm)$/i.test(this.link);
  }

  isOtherSupportedFile(): boolean {
    return /\.(html|txt)$/i.test(this.link);
  }

  isUnsupportedFile(): boolean {
    return !this.isVideoFile() && 
           !this.isPdfFile() && 
           !this.isImageFile() && 
           !this.isDocFile() &&
           !this.isPowerPointFile() &&
           !this.isExcelFile() &&
           !this.isTextFile() &&
           !this.isHtmlFile();
  }

  handleImageError(event: any) {
    event.target.style.display = 'none';
  }
}
