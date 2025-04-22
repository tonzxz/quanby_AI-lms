import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API/api.service';

interface Grade {
  studentName: string;
  grade: string | number;
}

interface AssignmentGrade {
  name: string;
  grades: Grade[];
}

interface QuizGrade {
  name: string;
  grades: Grade[];
}

interface AttendanceRecord {
  student: string;
  time: string;
}

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css'],
})
export class GradeListComponent implements OnInit {
  constructor(private API: APIService) {}
  
  // State management
  selectedQuiz: string = '';
  selectedTab: 'quizzes' | 'assignments' | 'attendanceHistory' | null = null;
  selectedMeeting: string = '';
  selectedAssignment: string = '';

  // Data storage
  quizGrades: Map<string, QuizGrade> = new Map();
  labGrades: Map<string, QuizGrade> = new Map();
  assignmentGrades: Map<string, AssignmentGrade> = new Map();
  attendanceHistory: Map<string, AttendanceRecord[]> = new Map();

  // Tracking IDs
  assignments: string[] = [];
  quizzes: string[] = [];
  labquizzes: string[] = [];

  ngOnInit(): void {
    this.API.showLoader();
    this.loadAllData();
  }

  loadAllData(): void {
    const assignmentSub$ = this.API.teacherGetAllSubmissions().subscribe((res) => {
      this.processAssignmentData(res.output);
      
      // Load quiz data after assignments
      const quizSub$ = this.API.teacherGetStudentQuizzes().subscribe((r) => {
        this.processQuizData(r.output);
        quizSub$.unsubscribe();
        this.API.hideLoader();
      });
      
      // Load lab quiz data
      const labSub$ = this.API.teacherGetLabQuizzes().subscribe((r) => {
        this.processLabQuizData(r.output);
        labSub$.unsubscribe();
      });
      
      // Load attendance data
      const attendanceSub$ = this.API.getAttendanceHistory().subscribe((r) => {
        this.processAttendanceData(r.output);
        attendanceSub$.unsubscribe();
      });
      
      assignmentSub$.unsubscribe();
    });
  }

  // Process the assignment data
  processAssignmentData(assignments: any[]): void {
    for (let assignment of assignments) {
      if (this.assignments.includes(assignment.assignmentid)) {
        this.assignmentGrades.get(assignment.assignmentid)?.grades.push({
          studentName: assignment.firstname + ' ' + assignment.lastname,
          grade: assignment.grade,
        });
      } else {
        this.assignments.push(assignment.assignmentid);
        this.assignmentGrades.set(assignment.assignmentid, {
          name: assignment.title,
          grades: [
            {
              studentName: assignment.firstname + ' ' + assignment.lastname,
              grade: assignment.grade,
            },
          ],
        });
      }
    }
  }

  // Process quiz data
  processQuizData(quizzes: any[]): void {
    for (let quiz of quizzes) {
      if (this.quizzes.includes(quiz.assessmentid)) {
        this.quizGrades.get(quiz.assessmentid)?.grades.push({
          studentName: quiz.firstname + ' ' + quiz.lastname,
          grade: quiz.takenpoints + ' / ' + quiz.totalpoints,
        });
      } else {
        this.quizzes.push(quiz.assessmentid);
        this.quizGrades.set(quiz.assessmentid, {
          name: quiz.title,
          grades: [
            {
              studentName: quiz.firstname + ' ' + quiz.lastname,
              grade: quiz.takenpoints + ' / ' + quiz.totalpoints,
            },
          ],
        });
      }
    }
  }

  // Process lab quiz data
  processLabQuizData(labQuizzes: any[]): void {
    for (let quiz of labQuizzes) {
      if (this.labquizzes.includes(`${quiz.lessonid}-${quiz.labid}`)) {
        this.labGrades.get(`${quiz.lessonid}-${quiz.labid}`)?.grades.push({
          studentName: quiz.firstname + ' ' + quiz.lastname,
          grade: quiz.takenpoints + ' / ' + quiz.totalpoints,
        });
      } else {
        this.labquizzes.push(`${quiz.lessonid}-${quiz.labid}`);
        this.labGrades.set(`${quiz.lessonid}-${quiz.labid}`, {
          name: `(${quiz.lab}) ${quiz.lesson}`,
          grades: [
            {
              studentName: quiz.firstname + ' ' + quiz.lastname,
              grade: quiz.takenpoints + ' / ' + quiz.totalpoints,
            },
          ],
        });
      }
    }
  }

  // Process attendance data
  processAttendanceData(attendanceRecords: any[]): void {
    for (let meeting of attendanceRecords) {
      const meetingDateTime = meeting.datetime;
      const studentName = meeting.firstname + ' ' + meeting.lastname;
      
      if (this.attendanceHistory.has(meetingDateTime)) {
        this.attendanceHistory.get(meetingDateTime)?.push({
          student: studentName,
          time: meeting.timein
        });
      } else {
        this.attendanceHistory.set(meetingDateTime, [{
          student: studentName,
          time: meeting.timein
        }]);
      }
    }
  }

  // Format date and time strings
  parseDateTime(time: string): string {
    return this.API.parseDateTime(time);
  }

  parseTime(time: string): string {
    return this.API.parseTime(time);
  }

  // Select a tab to display
  selectTab(tab: 'quizzes' | 'assignments' | 'attendanceHistory'): void {
    this.selectedTab = tab;
  }
  
  // Calculate percentage from a score like "3 / 5"
  getScorePercentage(score: string | number): number {
    if (typeof score === 'number') {
      return score;
    }
    
    if (typeof score === 'string' && score.includes('/')) {
      const parts = score.split('/').map(part => parseFloat(part.trim()));
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[1] !== 0) {
        return (parts[0] / parts[1]) * 100;
      }
    }
    
    return 0;
  }
  
  // Get average for the selected quiz
  getSelectedQuizAverage(): string {
    if (!this.selectedQuiz) {
      return '0.0%';
    }
    
    // Check in regular quizzes
    for (const [id, quiz] of this.quizGrades.entries()) {
      if (quiz.name === this.selectedQuiz) {
        let totalPercentage = 0;
        let count = 0;
        
        for (const grade of quiz.grades) {
          if (grade.grade !== null) {
            const percentage = this.getScorePercentage(grade.grade);
            if (percentage > 0) {
              totalPercentage += percentage;
              count++;
            }
          }
        }
        
        return count > 0 ? (totalPercentage / count).toFixed(1) + '%' : '0.0%';
      }
    }
    
    // Check in lab quizzes
    for (const [id, quiz] of this.labGrades.entries()) {
      if (quiz.name === this.selectedQuiz) {
        let totalPercentage = 0;
        let count = 0;
        
        for (const grade of quiz.grades) {
          if (grade.grade !== null) {
            const percentage = this.getScorePercentage(grade.grade);
            if (percentage > 0) {
              totalPercentage += percentage;
              count++;
            }
          }
        }
        
        return count > 0 ? (totalPercentage / count).toFixed(1) + '%' : '0.0%';
      }
    }
    
    return '0.0%';
  }
  
  // Get average for the selected assignment - using direct sum of grades divided by count
  getSelectedAssignmentAverage(): string {
    if (!this.selectedAssignment) {
      return '0.0';
    }
    
    // Find the matching assignment
    for (const [id, assignment] of this.assignmentGrades.entries()) {
      if (assignment.name === this.selectedAssignment) {
        let totalGrade = 0;
        let count = 0;
        
        for (const grade of assignment.grades) {
          if (grade.grade !== null && grade.grade !== undefined) {
            // Convert grade to number if it's a string
            const numericGrade = typeof grade.grade === 'string' 
              ? parseFloat(grade.grade) 
              : grade.grade;
            
            if (!isNaN(numericGrade)) {
              totalGrade += numericGrade;
              count++;
            }
          }
        }
        
        // Return the average as a simple number (total/count)
        return count > 0 ? (totalGrade / count).toFixed(1) : '0.0';
      }
    }
    
    return '0.0';
  }
  
  // Get color class based on the score value
  getScoreColorClass(score: string | number): string {
    const percentage = this.getScorePercentage(score);
    
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 80) return 'bg-blue-100 text-blue-800';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800';
    if (percentage >= 60) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  }
  
  // Format raw score for display
  formatScore(score: string | number): string {
    if (score === null || score === undefined) return 'NOT GRADED';
    return score.toString();
  }
  
  // Get total count of all students
  getTotalStudents(): number {
    const studentSet = new Set<string>();
    
    // Add quiz students
    this.quizGrades.forEach(quiz => {
      quiz.grades.forEach(grade => {
        studentSet.add(grade.studentName);
      });
    });
    
    // Add lab students
    this.labGrades.forEach(lab => {
      lab.grades.forEach(grade => {
        studentSet.add(grade.studentName);
      });
    });
    
    // Add assignment students
    this.assignmentGrades.forEach(assignment => {
      assignment.grades.forEach(grade => {
        studentSet.add(grade.studentName);
      });
    });
    
    return studentSet.size;
  }
  
  // Export grades to CSV
  exportToCSV(type: 'quizzes' | 'assignments' | 'attendanceHistory'): void {
    let csvContent = 'data:text/csv;charset=utf-8,';
    
    if (type === 'quizzes') {
      // Header row
      csvContent += 'Quiz Name,Student Name,Grade\r\n';
      
      // Add quiz grades
      this.quizGrades.forEach(quiz => {
        quiz.grades.forEach(grade => {
          csvContent += `"${quiz.name}","${grade.studentName}","${grade.grade}"\r\n`;
        });
      });
      
      // Add lab grades
      this.labGrades.forEach(lab => {
        lab.grades.forEach(grade => {
          csvContent += `"${lab.name}","${grade.studentName}","${grade.grade}"\r\n`;
        });
      });
    } else if (type === 'assignments') {
      // Header row
      csvContent += 'Assignment Name,Student Name,Grade\r\n';
      
      // Add assignment grades
      this.assignmentGrades.forEach(assignment => {
        assignment.grades.forEach(grade => {
          csvContent += `"${assignment.name}","${grade.studentName}","${grade.grade}"\r\n`;
        });
      });
    } else if (type === 'attendanceHistory') {
      // Header row
      csvContent += 'Meeting Date,Student Name,Check-in Time\r\n';
      
      // Add attendance records
      this.attendanceHistory.forEach((students, meetingDate) => {
        const formattedDate = this.parseDateTime(meetingDate);
        students.forEach(student => {
          csvContent += `"${formattedDate}","${student.student}","${this.parseTime(student.time)}"\r\n`;
        });
      });
    }
    
    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${type}_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  }
}