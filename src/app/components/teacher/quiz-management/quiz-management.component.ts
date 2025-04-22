import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { QuizCreationComponent } from '../teacher-modals/quiz-creation/quiz-creation.component';
import { APIService } from 'src/app/services/API/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-management',
  templateUrl: './quiz-management.component.html',
  styleUrls: ['./quiz-management.component.css'],
})
export class QuizManagementComponent implements OnInit {
  // Properties for feedback modal
  displayFeedbackModal: boolean = false;
  selectedStudentForFeedback: any = null;
  feedback: string = '';

  constructor(
    private modalService: NgbModal,
    private API: APIService,
    private router: Router
  ) {}

  isDropdownOpen = false;
  currentCourse: any;
  courses: any = [];
  mockAverageScore = 0;
  mockCompletionRate = 85;
  isCourseDropdownOpen = false;
  isClassDropdownOpen = false;
  currentClass: any;
  classes: any = [];

  selectedQuiz: any;
  selectedStudent: any;

  quizOptions = ['Quiz A', 'Quiz B', 'Quiz C'];
  studentOptions = ['Kenneth', 'Felix', 'John'];

  filteredQuizOptions: string[] = [];
  filteredStudentOptions: string[] = [];

  quizzes: any = [];
  
  // Student quiz data
  quizStudentData: any[] = [];
  loadingStudentData: boolean = false;

  // Pagination Variables
  itemsPerPage: number = 10; // Max items per page
  currentPage: number = 0; // Current page index
  loading: boolean = false; // Add this line
  selectedIndex: number = 0;
  value: number = 0;

  ngOnInit(): void {
    this.getQuizzes();
    this.getTeacherCourses();
    this.getTeacherClasses();
    this.filteredQuizOptions = this.quizOptions.slice();
    this.filteredStudentOptions = this.studentOptions.slice();

    setTimeout(() => {
      const quizzesTab = document.querySelector('[value="0"]');
      if (quizzesTab) {
        quizzesTab.classList.add('p-tabview-selected');
        const quizPanel = document.querySelector('[value="0"] + p-tabpanel');
        if (quizPanel) quizPanel.classList.add('p-tabview-panel');
      }
    }, 0); // Delay to ensure DOM is ready
  }
  
  get selectedQuizTitle(): string {
    return this.selectedQuiz == null ? 'Select a Quiz Above' : this.selectedQuiz.title;
  }

  getQuizzes() {
    this.API.showLoader();
    this.API.teacherGetQuizzes(this.currentCourse?.id, this.currentClass?.id).subscribe(
      (data: any) => {
        if (data.success) {
          this.quizzes = data.output;
          this.currentPage = 0; // Reset to first page when new data is loaded
        } else {
          this.API.failedSnackbar('Failed to load quizzes');
        }
        this.API.hideLoader();
      },
      (error) => {
        console.error('Error loading quizzes:', error);
        this.API.failedSnackbar('Error loading quizzes');
        this.API.hideLoader();
      }
    );
  }
  
  getTeacherClasses() {
    if (this.currentCourse) {
      this.API.teacherGetClassesByCourse(this.currentCourse.id).subscribe(
        (data: any) => {
          if (data.success) {
            this.classes = data.output.map((_class: any) => ({
              id: _class.id,
              name: _class.class,
              courseId: _class.courseid
            }));
          } else {
            this.API.failedSnackbar('Failed loading classes');
          }
        },
        (error) => {
          console.error('Error loading classes:', error);
          this.API.failedSnackbar('Error loading classes');
        }
      );
    } else {
      this.classes = [];
    }
  }

  getTeacherCourses() {
    this.courses = [];
    this.API.teacherAllCourses().subscribe((data) => {
      if (data.success) {
        for (let course of data.output) {
          var mode = 'LRSW';
          if (course.filter != null) {
            mode = course.filter;
          }
          this.courses.push({
            id: course.id,
            lang: course.languageid,
            title: course.course,
            lessons: course.lessons,
            description: course.details,
            image: course.image,
            mode: mode,
            pretest: course.pretest
          });
        }
        // Log the courses array after it's populated
        console.log('Courses loaded:', this.courses);
      } else {
        this.API.failedSnackbar('Failed loading courses');
      }
    });
  }

  selectQuiz(quiz: any) {
    this.selectedQuiz = quiz;
    this.resetStudent();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCourseDropdown() {
    this.isCourseDropdownOpen = !this.isCourseDropdownOpen;
  }

  toggleClassDropdown() {
    this.isClassDropdownOpen = !this.isClassDropdownOpen;
  }

  changeCourse(course: any) {
    console.log('Course selected:', course);
    this.currentCourse = course;
    this.currentClass = null; // Reset class when course changes
    this.isCourseDropdownOpen = false;
    this.getTeacherClasses(); // Update class list for the selected course
    this.filterQuizzes();
  }

  changeClass(selectedClass: any) {
    console.log('Class selected:', selectedClass);
    this.currentClass = selectedClass;
    this.isClassDropdownOpen = false;
    this.filterQuizzes();
  }

  gettingAvg = false;

  getAverageScore(quiz: any) {
    // Reset relevant variables
    this.search = '';
    this.resetStudent();
    this.selectedQuiz = quiz;
    this.gettingAvg = true;
    this.people = [];
    
    // Get quiz average
    this.API.getQuizAverage(quiz.id).subscribe((data) => {
      if (data.output.length) {
        this.mockAverageScore = Number(Number(data.output[0].average).toFixed(4));
      } else {
        this.mockAverageScore = 0;
      }
      this.gettingAvg = false;
      
      // Load all students who took the quiz
      this.loadAllStudentsForQuiz(quiz.id);
    });
  }
  
  // Load all students who took the selected quiz
  loadAllStudentsForQuiz(quizId: string) {
    this.loadingStudentData = true;
    this.quizStudentData = [];
    
    console.log("Loading student data for quiz ID:", quizId);
    
    this.API.teacherGetStudentQuizzes().subscribe(
      (data: any) => {
        if (data.success) {
          console.log("Raw student quiz data received:", data.output);
          
          // For testing: if no specific quiz data, show all students
          this.quizStudentData = data.output.map(this.mapStudentData);
          
          // Extract title from the selected quiz for filtering
          const quizTitle = this.selectedQuiz?.title?.toLowerCase();
          if (quizTitle) {
            // Try to filter by quiz title if ID filtering fails
            this.quizStudentData = this.quizStudentData.filter(student => {
              return student.quizTitle?.toLowerCase() === quizTitle;
            });
          }
          
          console.log('Processed student quiz data:', this.quizStudentData);
        } else {
          console.error("API returned error:", data);
          this.API.failedSnackbar('Failed to load student quiz data');
        }
        this.loadingStudentData = false;
      },
      (error: any) => {
        console.error('Error loading student quiz data:', error);
        this.API.failedSnackbar('Error loading student data');
        this.loadingStudentData = false;
      }
    );
  }
  
  // Helper method to map student data with case-insensitive field handling
  mapStudentData = (student: any) => {
    // Create lowercase version of all keys for case-insensitive access
    const lcStudent: any = {};
    Object.keys(student).forEach(key => {
      lcStudent[key.toLowerCase()] = student[key];
    });
    
    // Handle various possible field names with case-insensitive approach
    const firstName = lcStudent.firstname || '';
    const lastName = lcStudent.lastname || '';
    const score = parseFloat(lcStudent.score || lcStudent.takenpoints || "0");
    const totalPoints = parseFloat(lcStudent.totalpoints || lcStudent.totalitems || "100");
    const percentage = totalPoints > 0 ? (score / totalPoints) * 100 : 0;
    
    // Get student ID from various possible field names
    const studentId = lcStudent.studentid || lcStudent.id || '';
    
    // Store the quiz title for filtering
    const quizTitle = lcStudent.title || lcStudent.quiztitle || '';
    
    // Use timestamp field for completion date (as seen in your data)
    const completedDate = lcStudent.timestamp || lcStudent.datetaken || lcStudent.submittedon || 
                          lcStudent.datesubmitted || lcStudent.datecompleted;
    
    return {
      id: studentId,
      name: `${firstName} ${lastName}`,
      score: score,
      totalPoints: totalPoints,
      percentage: percentage.toFixed(2),
      completedOn: this.formatDate(completedDate),
      quizTitle: quizTitle
    };
  }
  
  formatDate(dateString: string): string {
    if (!dateString) return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    
    try {
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }
      
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.warn('Date formatting error:', error);
      return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  search = '';
  people: any = [];
  searching = false;
  search$: any;

  searchPeople(event: any) {
    this.people = [];
    if (event.target.value.trim() == '') {
      return;
    }

    if (this.selectedQuiz == null) {
      return;
    }

    this.searching = true;
    this.search$?.unsubscribe();
    this.search$ = this.API.searchStudentInQuiz(event.target.value.trim().toLowerCase(), this.selectedQuiz.id).subscribe((data) => {
      this.searching = false;
      if (data.success) {
        for (let person of data.output) {
          this.people.push(person);
        }
      }
      this.search$?.unsubscribe();
    });
  }

  selectStudent(student: any) {
    this.selectedStudent = student;
    this.search = student.firstname + ' ' + student.lastname;
    this.people = [];
  }

  resetStudent() {
    this.selectedStudent = null;
    this.search = '';
  }

  isModalOpen = false;
  createQuiz() {
    this.selectedQuiz = null; // Clear selected quiz for creating a new one
    this.isModalOpen = true; // Open the modal
  }

  editQuiz(quiz: any) {
    this.selectedQuiz = quiz; // Set the selected quiz for editing
    this.isModalOpen = true; // Open the modal
  }

  closeQuiz() {
    this.isModalOpen = false;
    this.getQuizzes(); // Refresh quizzes after closing
  }

  parseDate(date: string) {
    return this.API.parseDate(date);
  }

  filterQuizzes() {
    if (this.currentCourse || this.currentClass) {
      this.getQuizzes(); // This will now use the current course and class
    }
  }

  filterStudents() {
    if (!this.selectedStudent) {
      this.filteredStudentOptions = this.studentOptions.slice();
    } else {
      this.filteredStudentOptions = this.studentOptions.filter((option) =>
        option.toLowerCase().includes(this.selectedStudent.toLowerCase())
      );
    }
  }

  // Feedback modal functions
  openFeedbackModal(student: any): void {
    this.selectedStudentForFeedback = student;
    this.feedback = '';
    this.displayFeedbackModal = true;
  }

  closeFeedbackModal(): void {
    this.displayFeedbackModal = false;
    this.selectedStudentForFeedback = null;
    this.feedback = '';
  }

  sendFeedback(): void {
    if (!this.selectedStudentForFeedback || !this.feedback.trim() || !this.selectedQuiz) {
      this.API.failedSnackbar('Please provide feedback message before sending.');
      return;
    }

    // Assuming API.pushNotifications needs student ID
    const studentId = this.selectedStudentForFeedback.id;
    
    this.API.pushNotifications(
      `${this.API.getFullName()} sent a feedback`,
      `${this.API.getFullName()} sent a feedback about your quiz titled, <b>'${this.selectedQuiz.title}'</b>. ${this.API.getUserData().firstname} said <b>'${this.feedback}'</b>`,
      studentId
    );

    this.API.successSnackbar('Successfully sent feedback!');
    this.closeFeedbackModal();
  }

  navigateBack(): void {
    this.router.navigate(['teacher/t-home']);
  }

  navigateAnal(): void {
    if (this.selectedQuiz) {
      this.router.navigate(['teacher/quiz-analytics'], { state: { quiz: this.selectedQuiz } });
    } else {
      this.API.failedSnackbar('Please select a quiz');
    }
  }

  // Pagination Logic
  paginatedQuizzes() {
    const start = this.currentPage * this.itemsPerPage;
    return this.quizzes.slice(start, start + this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.quizzes.length) {
      this.currentPage++;
    }
  }

  get totalPages() {
    return Math.ceil(this.quizzes.length / this.itemsPerPage);
  }

  deleteQuiz(quizId: string) {
    if (confirm('Are you sure you want to delete this quiz?')) {
      this.API.deleteQuiz(quizId).subscribe(
        (response) => {
          if (response.success) {
            this.API.successSnackbar('Quiz successfully deleted!');
            this.getQuizzes(); // Refresh the quiz list after deletion
          } else {
            this.API.failedSnackbar('Failed to delete quiz.');
          }
        },
        (error) => {
          console.error('Error deleting quiz:', error);
          this.API.failedSnackbar('An error occurred while deleting the quiz.');
        }
      );
    }
  }
}