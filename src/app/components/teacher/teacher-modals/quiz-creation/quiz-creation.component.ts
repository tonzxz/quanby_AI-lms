import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from 'src/app/services/API/api.service';

interface CourseClass {
  id: string;
  courseid: string;
  course: string;
  class: string;
  pretest?: string; // Adjust if API returns boolean
}

@Component({
  selector: 'app-quiz-creation',
  templateUrl: './quiz-creation.component.html',
  styleUrls: ['./quiz-creation.component.css'],
})
export class QuizCreationComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  @Input() myCustomClass: string = '';
  @Input() quiz: any = null;
  @Input() courses: any = [];

  course: CourseClass | null = null;
  classes: CourseClass[] = [];
  availableCourses: { courseid: string; course: string }[] = [];
  availableClasses: { id: string; courseid: string; class: string }[] = [];
  selectedCourseId: string = '';
  selectedClassID: string = '';
  lesson: string = '';
  topic: string = '';
  title: string = '';
  description: string = '';
  timelimit?: number;
  deadline: string = '';
  attachments?: File;
  settings: any = {
    random_question: false,
    allow_backtrack: false,
    allow_review: false,
    popup_quiz: false,
  };
  loading: boolean = false;
  uploading: boolean = false;
  lessons: any[] = [];
  topics: any[] = [];
  types: string[] = ['Multiple Choice', 'True/False', 'Identification', 'Essay'];
  removeList: string[] = [];
  questions: any = [
    {
      type: '0',
      question: { value: '', attachments: [] },
      options: [
        { value: '', attachment: null, active: false },
        { value: '', attachment: null, active: false },
        { value: '', attachment: null, active: false },
        { value: '', attachment: null, active: false },
      ],
      answer: '',
    },
  ];
  isPreTest: boolean = false;
  showPreTestOption: boolean = false;
  hasExistingPreTest: boolean = false;

  // AI Modal Variables
  showAIModal: boolean = false;
  aiPrompt: string = '';
  aiGeneratedQuestion: string = '';
  aiGeneratedChoices: string[] = [];
  aiGeneratedAnswer: string = '';
  selectedQuestionType: string = '';
  currentEditingQuestion: any = null;

  // Bulk AI Modal Variables
  showBulkAIModal: boolean = false;
  bulkAIConfig = {
    prompt: '',
    multipleChoice: 0,
    trueFalse: 0,
    identification: 0,
    essay: 0,
  };
  loadingBulkAI = false;
  progressPercentage = 0;

  constructor(private API: APIService) {}

  async ngOnInit(): Promise<void> {
    if (this.quiz) {
      this.loading = true;
      this.API.showSnackbar('Loading quiz details...', undefined, 999999999);

      await this.loadAllCourses();
      await this.loadClasses();

      this.selectedCourseId = this.quiz.courseid;
      await this.onCourseDropdownChange();
      this.selectedClassID = this.quiz.classid;
      await this.onClassSelectionChange();

      if (this.quiz.lessonid) {
        this.lesson = this.quiz.lessonid;
        const topicData = await firstValueFrom(this.API.getTopics(this.quiz.lessonid));
        if (topicData.success) this.topics = topicData.output;
        if (this.quiz.topicid) this.topic = this.quiz.topicid;
      }

      this.title = this.quiz.title;
      this.description = this.quiz.details;
      this.timelimit = this.quiz.timelimit;
      this.deadline = this.quiz.deadline;
      this.attachments = this.quiz.attachments;
      this.isPreTest = this.quiz.pretest === true || this.quiz.pretest === 't';

      this.settings = {
        random_question: this.quiz.settings?.includes('random_question') ?? false,
        allow_backtrack: this.quiz.settings?.includes('allow_backtrack') ?? false,
        allow_review: this.quiz.settings?.includes('allow_review') ?? false,
        popup_quiz: this.quiz.settings?.includes('popup_quiz') ?? false,
      };

      await this.loadQuizItems();
      this.API.successSnackbar('Quiz loaded successfully!');
      this.loading = false;
    } else {
      this.questions = [this.createNewQuestion()];
      await this.loadAllCourses();
      await this.loadClasses();
    }
  }

  private async loadAllCourses(): Promise<void> {
    try {
      this.API.showLoader();
      const data = await firstValueFrom(this.API.teacherAllCourses());
      if (data.success) {
        this.availableCourses = data.output.map((course: any) => ({
          courseid: course.id,
          course: course.course,
        }));
      } else {
        this.API.failedSnackbar('Unable to load courses');
      }
    } catch (error) {
      console.error('Error loading courses:', error);
      this.API.failedSnackbar('Error loading courses');
    } finally {
      this.API.hideLoader();
    }
  }

  private async loadClasses(): Promise<void> {
    try {
      this.API.showLoader();
      const data = await firstValueFrom(this.API.teacherAllClasses());
      if (data.success) {
        this.availableClasses = data.output.map((_class: any) => ({
          id: _class.id,
          courseid: _class.courseid,
          class: _class.class,
        }));
        // Map to CourseClass interface, adding 'course' from availableCourses or a fallback
        this.classes = this.availableClasses.map((cls) => {
          const course = this.availableCourses.find((c) => c.courseid === cls.courseid)?.course || 'Unknown Course';
          return {
            id: cls.id,
            courseid: cls.courseid,
            course: course,
            class: cls.class,
          };
        });
      } else {
        this.API.failedSnackbar('Unable to load classes');
      }
    } catch (error) {
      console.error('Error loading classes:', error);
      this.API.failedSnackbar('Error loading classes');
    } finally {
      this.API.hideLoader();
    }
  }

  async onCourseDropdownChange(): Promise<void> {
    if (this.selectedCourseId) {
      const selectedCourse = this.availableCourses.find(
        (course) => course.courseid === this.selectedCourseId
      );
      if (selectedCourse) {
        this.course = { id: '', courseid: selectedCourse.courseid, course: selectedCourse.course, class: '' };
        await this.onCourseSelectionChange();
      } else {
        this.API.failedSnackbar('Selected course not found');
      }
    } else {
      this.course = null;
      this.availableClasses = [];
      this.lessons = [];
      this.topics = [];
    }
  }

 async onCourseSelectionChange(): Promise<void> {
  if (!this.selectedCourseId) {
    this.availableClasses = []
    this.selectedClassID  = ''
    this.lesson = ''
    this.topic  = ''
    this.lessons = []
    this.topics  = []
    this.showPreTestOption = false
    return
  }

  // filter classes that belong to the chosen course
  this.availableClasses = this.classes.filter(
    _class => _class.courseid === this.selectedCourseId
  )

  /* keep the existing class selection (edit mode)  
     clear it if it no longer belongs to this course          */
  if (!this.availableClasses.some(c => c.id === this.selectedClassID))
    this.selectedClassID = ''

  this.lesson = ''
  this.topic  = ''
  this.lessons = []
  this.topics  = []

  this.showPreTestOption = await this.API.checkPreTestStatus(this.selectedCourseId)

  await this.onClassSelectionChange()           // load lessons (if a class is selected)
}

// ------------------------------------------------------------
// 2️⃣  onClassSelectionChange
// ------------------------------------------------------------
async onClassSelectionChange(): Promise<void> {
  if (!this.selectedClassID || !this.selectedCourseId) {
    this.lesson = ''
    this.topic  = ''
    this.topics  = []
    this.lessons = []
    return
  }

  const lessonData = await firstValueFrom(
    this.API.teacherCourseLessons(this.selectedCourseId)
  )

  if (!lessonData.success) {
    this.API.failedSnackbar('Failed to load lessons')
    return
  }

  this.lessons = lessonData.output

  /* keep the quiz’s lesson id in edit mode; otherwise leave blank   */
  if (!this.lessons.some(l => String(l.id) === String(this.lesson)))
    this.lesson = ''

  await this.onLessonChange()
}


  async onLessonChange(): Promise<void> {
  if (!this.lesson) {
    this.topics = []
    this.topic  = ''
    return
  }

  const resp = await firstValueFrom(this.API.getTopics(this.lesson))

  if (!resp.success) {
    this.API.failedSnackbar('Failed to load topics')
    return
  }

  this.topics = resp.output

  /* 👇 keep the topic that came from the quiz (if any)                *
   *     – otherwise default to the first topic in the list            */
  if (!this.topic || !this.topics.some(t => String(t.id) === String(this.topic)))
    this.topic = this.topics[0]?.id || ''
}


private async loadQuizItems(): Promise<void> {
  try {
    const data = await firstValueFrom(this.API.teacherGetQuizItems(this.quiz.id));
    if (data.success) {
      this.questions = data.output.map((item: any) => {
        const [question, attachments] = item.question.split('::::');
        let options =
          item.type === '0'
            ? item.options
                .split('\\n\\n')
                .map((option: string, index: number) => {
                  const [value, attachment] = option.split('::::');
                  return {
                    value,
                    attachment: attachment ? this.API.getURL(attachment) : null,
                    active: item.answer === index.toString(),
                  };
                })
                .slice(0, 4)
            : undefined;
        return {
          id: item.id,
          type: item.type,
          question: {
            value: question,
            attachments: attachments
              ?.split('\\n\\n')
              .filter((url: string) => url.trim())
              .map((url: string) => this.API.getURL(url)) || [],
          },
          options,
          answer: item.type === '0' ? item.answer : item.answer,
        };
      });
    }
  } catch (error) {
    console.error('Error loading quiz items:', error);
    this.API.failedSnackbar('Failed to load quiz items');
  }
}

  private createNewQuestion(): any {
    return {
      type: '0',
      question: { value: '', attachments: [] },
      options: [
        { value: '', attachment: null, active: false },
        { value: '', attachment: null, active: false },
        { value: '', attachment: null, active: false },
        { value: '', attachment: null, active: false },
      ],
      answer: '',
    };
  }

  selectedFileName: string | undefined;
  questionOnFileSelected(event: Event, question: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => question.attachments.push(reader.result);
      reader.readAsDataURL(input.files[0]);
    }
  }

  optionOnFileSelected(event: Event, option: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => (option.attachment = reader.result);
      reader.readAsDataURL(input.files[0]);
    }
  }

  removeOptionAttachment(option: any): void {
    if (confirm('Are you sure you want to remove this attachment?')) {
      option.attachment = null;
    }
  }

  removeQuestionAttachment(question: any, index: number): void {
    if (confirm('Are you sure you want to remove this attachment?')) {
      question.attachments.splice(index, 1);
    }
  }

  removeQuestion(index: number): void {
    if (confirm('Are you sure you want to remove this question?')) {
      if (this.questions[index].id) this.removeList.push(this.questions[index].id);
      this.questions.splice(index, 1);
    }
  }

  setMultipleAnswer(answer: string, question: any): void {
    if (!(question.answer as string).includes(answer)) {
      question.answer += ' ' + answer;
      question.answer = question.answer.trim();
    } else {
      question.answer = (question.answer as string).replaceAll(answer, '').trim();
    }
  }

  setTFAnswer(answer: string, question: any): void {
    question.answer = answer;
  }

  setType(question: any): void {
    question.answer = question.type === '3' ? '{{auto-checked}}' : '';
  }

  addNewItem(): void {
    this.questions.push(this.createNewQuestion());
  }

  async uploadImage(file?: string): Promise<string | null> {
    if (!file) return null;
    const filelocation = `files/${uuidv4()}.png`;
    await this.API.uploadBase64(file, filelocation);
    return filelocation;
  }

  async onCourseChange(selectedClass: CourseClass): Promise<void> {
    try {
      this.course = selectedClass;
      this.selectedClassID = selectedClass.id;
      this.lesson = '';
      this.topic = '';
      this.topics = [];
      this.showPreTestOption = await this.API.checkPreTestStatus(selectedClass.courseid);
      if (selectedClass.courseid) {
        const response = await firstValueFrom(this.API.teacherCourseLessons(selectedClass.courseid));
        if (response.success) {
          this.lessons = response.output;
        } else {
          this.API.failedSnackbar('Failed to load lessons');
        }
      } else {
        this.lessons = [];
        this.showPreTestOption = false;
      }
    } catch (error) {
      console.error('Error loading lessons:', error);
      this.API.failedSnackbar('Failed to fetch lessons for the selected course.');
    }
  }

  async submit(): Promise<void> {
  if (this.uploading || !this.validateInputs()) return;

  this.uploading = true;
  this.API.showLoader();

  const settings = this.prepareSettings();
  const attachments = await this.prepareAttachments();
  const quizData = {
    courseid: this.selectedCourseId,
    title: this.title?.trim() || '', 
    description: this.description?.trim() || '', 
    timelimit: this.timelimit ?? 0,   
    deadline: this.deadline || '', 
    attachments: attachments || null,
    settings: settings || null, 
    lesson: this.isPreTest ? null : (this.lesson || null),      
    topic: this.isPreTest ? null : (this.topic || null), 
    classid: this.isPreTest ? null : (this.selectedClassID || null), 
    pretest: this.isPreTest, // Send as boolean (true/false), backend should handle as TRUE/FALSE
  };

  console.log('Quiz Data being sent:', quizData); // Debug log

  try {
    if (this.quiz) {
      await this.updateExistingQuiz(quizData);
    } else {
      await this.createNewQuiz(quizData);
    }
    this.API.successSnackbar('Quiz saved successfully!');
    this.closeModal();
  } catch (error) {
    console.error('Error saving quiz:', error);
    this.API.failedSnackbar(`Failed to save quiz: ${this.getErrorMessage(error)}`);
  } finally {
    this.uploading = false;
    this.API.hideLoader();
  }
}

//   private async createNewQuiz(quizData: any): Promise<void> {
//   const id = this.API.createID32();
//   await lastValueFrom(
//     this.API.createQuiz(
//       quizData.course,
//       id,
//       quizData.title,
//       quizData.description,
//       quizData.timelimit,
//       quizData.deadline,
//       quizData.attachments,
//       quizData.settings,
//       quizData.lesson,
//       quizData.topic,
//       quizData.classid,
//       quizData.pretest
//     )
//   );
//   await this.saveQuizItems(id);
//   this.API.notifyStudentsInCourse(
//     `${this.API.getFullName()} uploaded a new quiz.`,
//     `${this.API.getFullName()} uploaded a new quiz titled, <b>'${quizData.title}'</b>. Due on <b>${this.API.parseDate(quizData.deadline)}</b>.`,
//     quizData.course
//   );
// }

  
  private async createNewQuiz(quizData: any): Promise<void> {
  const id = this.API.createID32()

  await lastValueFrom(
    this.API.createQuiz(           // ①  pass courseid, not course
      quizData.courseid,
      id,
      quizData.title,
      quizData.description,
      quizData.timelimit,
      quizData.deadline,
      quizData.attachments,
      quizData.settings,
      quizData.lesson,
      quizData.topic,
      quizData.classid,
      quizData.pretest
    )
  )

  await this.saveQuizItems(id)

  this.API.notifyStudentsInCourse( // ②  same here
    `${this.API.getFullName()} uploaded a new quiz.`,
    `${this.API.getFullName()} uploaded a new quiz titled, <b>'${quizData.title}'</b>. Due on <b>${this.API.parseDate(quizData.deadline)}</b>.`,
    quizData.courseid
  )
  }
  
  
  private validateInputs(): boolean {
  if (!this.selectedCourseId) {
    this.API.failedSnackbar('Please select a course');
    return false;
  }
  if (!this.title?.trim()) {
    this.API.failedSnackbar('Please enter a quiz title');
    return false;
  }
  if (!this.timelimit || this.timelimit <= 0) {
    this.API.failedSnackbar('Please enter a valid time limit');
    return false;
  }
  if (!this.deadline) {
    this.API.failedSnackbar('Please select a deadline');
    return false;
  }
  if (!this.isPreTest && !this.selectedClassID) {
    this.API.failedSnackbar('Please select a class');
    return false;
  }
  if (this.questions.length <= 0) {
    this.API.failedSnackbar('Please add at least one question');
    return false;
  }

  for (let i = 0; i < this.questions.length; i++) {
    const question = this.questions[i];
    if (!question.question.value?.trim()) {
      this.API.failedSnackbar(`Question #${i + 1} is empty`);
      return false;
    }
    if (question.type === '0') {
      if (!question.options.some((opt: any) => opt.active)) {
        this.API.failedSnackbar(`Please select one correct answer for Question #${i + 1}`);
        return false;
      }
      if (question.options.find((opt: any) => !opt.value?.trim())) {
        this.API.failedSnackbar(`Please fill in all options for Question #${i + 1}`);
        return false;
      }
      if (!['0', '1', '2', '3'].includes(question.answer)) {
        this.API.failedSnackbar(`Please select a valid answer for Question #${i + 1}`);
        return false;
      }
    }
    if (question.type === '1' && !['T', 'F'].includes(question.answer)) {
      this.API.failedSnackbar(`Please select True or False for Question #${i + 1}`);
      return false;
    }
    if (question.type === '2' && !question.answer?.trim()) {
      this.API.failedSnackbar(`Please provide an answer for Question #${i + 1}`);
      return false;
    }
  }
  return true;
  }
  
  private prepareSettings(): string {
    return Object.entries(this.settings)
      .filter(([_, active]) => active)
      .map(([key]) => key)
      .join(' ')
      .trim();
  }

  private async prepareAttachments(): Promise<string | undefined> {
    if (!this.attachments) return undefined;
    const fileparse = this.attachments.name.split('.');
    const serverLocation = `${this.API.createID36()}.${fileparse[fileparse.length - 1]}`;
    await this.API.uploadFileWithProgress(this.attachments, serverLocation);
    return `files/${serverLocation}>${this.attachments.name}`;
  }

  private getErrorMessage(error: any): string {
    if (typeof error === 'string') return error;
    if (error?.message) return error.message;
    return 'An unexpected error occurred';
  }

//   private async updateExistingQuiz(quizData: any): Promise<void> {
//   await lastValueFrom(
//     this.API.updateQuiz(
//       quizData.course,
//       this.quiz.id,
//       quizData.title,
//       quizData.description,
//       quizData.timelimit,
//       quizData.deadline,
//       quizData.attachments,
//       quizData.settings,
//       quizData.lesson,
//       quizData.topic,
//       quizData.classid, 
//       quizData.pretest // Now 't' or 'f'
//     )
//   );
//   await this.saveQuizItems(this.quiz.id);
  // }
  
  private async updateExistingQuiz(quizData: any): Promise<void> {
  await lastValueFrom(
    this.API.updateQuiz(           // ③  pass courseid instead of course
      quizData.courseid,
      this.quiz.id,
      quizData.title,
      quizData.description,
      quizData.timelimit,
      quizData.deadline,
      quizData.attachments,
      quizData.settings,
      quizData.lesson,
      quizData.topic,
      quizData.classid,
      quizData.pretest
    )
  )

  await this.saveQuizItems(this.quiz.id)
}



  // ---------------- SAVE QUIZ ITEMS ----------------
private async saveQuizItems(quizId: string) {
  for (const item of this.questions) {

    /* 🔑  Ensure every essay (type 3) carries the placeholders
       expected by the API.  (Keeps old behaviour that used to work.) */
    if (item.type === '3') {
      item.answer  = item.answer?.trim() ? item.answer : '{{auto-checked}}'
    }

    const options = await this.prepareQuestionOptions(item)   // '' for non‑MCQ
    const qAttchs = await this.prepareQuestionAttachments(item.question)

    if (item.id) {
      await lastValueFrom(
        this.API.updateQuizItem(
          item.id,
          item.type,
          item.question.value + qAttchs,
          item.answer,
          options                                   // always a string
        )
      )
    } else {
      await lastValueFrom(
        this.API.createQuizItem(
          quizId,
          item.type,
          item.question.value + qAttchs,
          item.answer,
          options                                   // always a string
        )
      )
    }
  }

  for (const itemId of this.removeList)
    await lastValueFrom(this.API.deleteQuizItem(itemId))
}


// REPLACE the whole helper with this
private async prepareQuestionOptions(item: any): Promise<string> {
  if (item.type !== '0') return ''           // ← empty string, not undefined

  let options = ''
  for (const opt of item.options) {
    let link = opt.attachment
    if (link?.includes('base64') && link?.includes('data:image'))
      link = await this.uploadImage(link)

    options += `${opt.value}::::${link ?? ''}\\n\\n`
  }
  return options.trimEnd()
}




  private async prepareQuestionAttachments(question: any): Promise<string> {
    let attachments = '::::';
    for (const attachment of question.attachments) {
      let link = attachment;
      if (attachment.includes('base64') && attachment.includes('data:image')) {
        link = await this.uploadImage(attachment);
      }
      attachments += (attachments === '::::' ? '' : '\\n\\n') + link;
    }
    return attachments;
  }

  // Commented out unused function
  // isTimeLimitValid(): boolean {
  //   return this.timelimit !== undefined && this.timelimit > 0;
  // }

  openAIModal(question: any): void {
    this.currentEditingQuestion = question;
    this.selectedQuestionType = question.type;
    this.showAIModal = true;
    this.aiPrompt = '';
    this.aiGeneratedQuestion = '';
    this.aiGeneratedChoices = [];
    this.aiGeneratedAnswer = '';
  }

  // async generateAIQuestion(): Promise<void> {
  //   if (!this.aiPrompt.trim()) {
  //     this.API.failedSnackbar('Please enter a topic or prompt!');
  //     return;
  //   }
  //   this.API.justSnackbar('Generating question, please wait...');
  //   try {
  //     const prompt = `Create a ${this.types[Number(this.selectedQuestionType)]} question based on: "${this.aiPrompt}". Do not include answers or choices.`;
  //     this.aiGeneratedQuestion = await this.API.analyzeEssay(prompt);

  //     if (this.selectedQuestionType === '0') {
  //       const choicesPrompt = `Generate exactly 4 answer choices for this question: "${this.aiGeneratedQuestion}". Ensure one is correct and three are incorrect. Format them as follows:\nCorrect: <correct answer>\nIncorrect: <incorrect 1>\nIncorrect: <incorrect 2>\nIncorrect: <incorrect 3>`;
  //       const choices = await this.API.analyzeEssay(choicesPrompt);
  //       const choicesArray = choices.split('\n').filter((opt) => opt.trim());
  //       if (choicesArray.length === 4) {
  //         let correctAnswer = choicesArray[0].replace('Correct: ', '').trim();
  //         let incorrectAnswers = choicesArray.slice(1).map((choice) => choice.replace('Incorrect: ', '').trim());
  //         let allChoices = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);
  //         this.aiGeneratedChoices = allChoices;
  //         this.aiGeneratedAnswer = correctAnswer;
  //       }
  //     } else if (this.selectedQuestionType === '1') {
  //       const tfPrompt = `For the statement: "${this.aiGeneratedQuestion}", determine if it is True or False. Respond only with 'T' or 'F'.`;
  //       const tfAnswer = await this.API.analyzeEssay(tfPrompt);
  //       this.aiGeneratedAnswer = tfAnswer.includes('T') ? 'T' : 'F';
  //     } else if (this.selectedQuestionType === '2') {
  //       const idPrompt = `Provide a one-word or short phrase answer for the question: "${this.aiGeneratedQuestion}".`;
  //       this.aiGeneratedAnswer = await this.API.analyzeEssay(idPrompt);
  //     }
  //     this.API.successSnackbar('Question generated successfully!');
  //   } catch (error) {
  //     this.API.failedSnackbar('Error generating question. Please try again.');
  //   }
  // }

  // ⬇︎ overwrite your whole generateAIQuestion() with this version
// async generateAIQuestion(): Promise<void> {
//   if (!this.aiPrompt.trim()) {
//     this.API.failedSnackbar('Please enter a topic or prompt!')
//     return
//   }

//   this.API.justSnackbar('Generating question, please wait...')

//   try {
//     /* reset any leftovers from a previous run */
//     this.aiGeneratedQuestion = ''
//     this.aiGeneratedChoices  = []
//     this.aiGeneratedAnswer   = ''

//     switch (this.selectedQuestionType) {

//       /* -------------------------------------------------- */
//       /* MULTIPLE‑CHOICE (type '0')                         */
//       /* -------------------------------------------------- */
//       case '0': {
//         const qPrompt = `Create a Multiple Choice question based on: "${this.aiPrompt}". ` +
//                         `Do not include answers or choices.`
//         this.aiGeneratedQuestion = await this.API.analyzeEssay(qPrompt)

//         const cPrompt = `Generate exactly 4 answer choices for this question: ` +
//                         `"${this.aiGeneratedQuestion}". Ensure one is correct ` +
//                         `and three are incorrect. Format them as follows:\n` +
//                         `Correct: <correct answer>\n` +
//                         `Incorrect: <incorrect 1>\n` +
//                         `Incorrect: <incorrect 2>\n` +
//                         `Incorrect: <incorrect 3>`
//         const rawChoices   = await this.API.analyzeEssay(cPrompt)
//         const choicesArray = rawChoices.split('\n').filter(s => s.trim() !== '')

//         if (choicesArray.length === 4) {
//           const correct      = choicesArray[0].replace('Correct: ', '').trim()
//           const distractors  = choicesArray.slice(1).map(s => s.replace('Incorrect: ', '').trim())
//           const shuffled     = [correct, ...distractors].sort(() => Math.random() - 0.5)

//           this.aiGeneratedChoices = shuffled
//           this.aiGeneratedAnswer  = correct
//         }
//         break
//       }

//       /* -------------------------------------------------- */
//       /* TRUE / FALSE (type '1')                            */
//       /* -------------------------------------------------- */
//       case '1': {
//         const qPrompt = `Create a True or False statement about: "${this.aiPrompt}".`
//         this.aiGeneratedQuestion = await this.API.analyzeEssay(qPrompt)

//         const aPrompt = `For the statement: "${this.aiGeneratedQuestion}", ` +
//                         `respond only with 'T' if it is true or 'F' if it is false.`
//         const tf      = await this.API.analyzeEssay(aPrompt)
//         this.aiGeneratedAnswer = tf.includes('T') ? 'T' : 'F'
//         break
//       }

//       /* -------------------------------------------------- */
//       /* IDENTIFICATION (type '2')                          */
//       /* -------------------------------------------------- */
//       case '2': {
//         const qPrompt = `Create an identification question based on: "${this.aiPrompt}".`
//         this.aiGeneratedQuestion = await this.API.analyzeEssay(qPrompt)

//         const aPrompt = `Provide a one‑word or short‑phrase answer for: "${this.aiGeneratedQuestion}".`
//         this.aiGeneratedAnswer = await this.API.analyzeEssay(aPrompt)
//         break
//       }

//       /* -------------------------------------------------- */
//       /* ESSAY (type '3')                                   */
//       /* -------------------------------------------------- */
//       case '3': {
//         const essayPrompt =
//           `Give me an essay question using this topic: ${this.aiPrompt}. ` +
//           `Minimum 1 sentence, Maximum 2 sentences question.`
//         this.aiGeneratedQuestion = await this.API.analyzeEssay(essayPrompt)

//         this.aiGeneratedAnswer = '{{auto-checked}}'  // backend placeholder
//         break
//       }

//       default:
//         throw new Error('Unknown question type')
//     }

//     this.API.successSnackbar('Question generated successfully!')
//   } catch (error) {
//     console.error(error)
//     this.API.failedSnackbar('Error generating question. Please try again.')
//   }
  // }
  
  async generateAIQuestion(): Promise<void> {
  if (!this.aiPrompt.trim()) {
    this.API.failedSnackbar('Please enter a topic or prompt!');
    return;
  }

  this.API.justSnackbar('Generating question, please wait...');
  try {
    /* ------- keep existing behaviour for MCQ, T/F, ID -------- */
    const prompt = `Create a ${this.types[Number(this.selectedQuestionType)]} question based on: "${this.aiPrompt}". Do not include answers or choices.`;
    this.aiGeneratedQuestion = await this.API.analyzeEssay(prompt);

    if (this.selectedQuestionType === '0') {
      const choicesPrompt =
        `Generate exactly 4 answer choices for this question: "${this.aiGeneratedQuestion}". ` +
        `Ensure one is correct and three are incorrect. Format them as follows:\n` +
        `Correct: <correct answer>\nIncorrect: <incorrect 1>\nIncorrect: <incorrect 2>\nIncorrect: <incorrect 3>`;
      const choices = await this.API.analyzeEssay(choicesPrompt);
      const choicesArray = choices.split('\n').filter(opt => opt.trim());

      if (choicesArray.length === 4) {
        const correctAnswer = choicesArray[0].replace('Correct: ', '').trim();
        const incorrectAnswers = choicesArray.slice(1).map(c => c.replace('Incorrect: ', '').trim());
        this.aiGeneratedChoices = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);
        this.aiGeneratedAnswer  = correctAnswer;
      }
    } else if (this.selectedQuestionType === '1') {
      const tfPrompt =
        `For the statement: "${this.aiGeneratedQuestion}", determine if it is True or False. ` +
        `Respond only with 'T' or 'F'.`;
      const tfAnswer = await this.API.analyzeEssay(tfPrompt);
      this.aiGeneratedAnswer = tfAnswer.includes('T') ? 'T' : 'F';

    } else if (this.selectedQuestionType === '2') {
      const idPrompt =
        `Provide a one-word or short phrase answer for the question: "${this.aiGeneratedQuestion}".`;
      this.aiGeneratedAnswer = await this.API.analyzeEssay(idPrompt);

    /* -------- new branch just for ESSAY (type '3') -------- */
    } else if (this.selectedQuestionType === '3') {
      const essayPrompt =
        `Give me an essay question using this topic: ${this.aiPrompt}. ` +
        `Minimum 1 sentence, Maximum 2 sentences question.`;
      this.aiGeneratedQuestion = await this.API.analyzeEssay(essayPrompt);

      this.aiGeneratedChoices = [];          // not used for essay
      this.aiGeneratedAnswer  = '{{auto-checked}}';  // placeholder required by backend
    }

    this.API.successSnackbar('Question generated successfully!');
  } catch (error) {
    this.API.failedSnackbar('Error generating question. Please try again.');
  }
}



 updateActiveState(question: any): void {
  question.options.forEach((opt: any, index: number) => {
    opt.active = question.answer === index.toString();
  });
}

// Ensure useGeneratedQuestion sets the answer and active properties correctly
useGeneratedQuestion(): void {
  if (!this.currentEditingQuestion) return;
  
  this.currentEditingQuestion.question.value = this.aiGeneratedQuestion;

  if (this.selectedQuestionType === '0' && this.aiGeneratedChoices.length === 4) {
    const correctIndex = this.aiGeneratedChoices.findIndex(
      (choice: string) => choice === this.aiGeneratedAnswer
    );
    if (correctIndex === -1) {
      this.API.failedSnackbar('Correct answer does not match any of the generated choices.');
      return;
    }
    this.currentEditingQuestion.options.forEach((option: any, index: number) => {
      option.value = this.aiGeneratedChoices[index];
      option.active = index === correctIndex;
    });
    this.currentEditingQuestion.answer = correctIndex.toString();
  } else if (this.selectedQuestionType === '1') {
    this.currentEditingQuestion.answer = this.aiGeneratedAnswer;
  } else if (this.selectedQuestionType === '2') {
    this.currentEditingQuestion.answer = this.aiGeneratedAnswer;
  } else if (this.selectedQuestionType === '3') {
    this.currentEditingQuestion.answer = '{{auto-checked}}';
  }

  this.showAIModal = false;
}

  async generateBulkQuestions(): Promise<void> {
    this.loadingBulkAI = true;
    this.progressPercentage = 0;
    this.API.justSnackbar('Generating questions, please wait...');

    try {
      this.questions = [];
      const totalQuestions =
        this.bulkAIConfig.multipleChoice +
        this.bulkAIConfig.trueFalse +
        this.bulkAIConfig.identification +
        this.bulkAIConfig.essay;

      if (totalQuestions === 0) {
        this.API.failedSnackbar('Please enter at least one question count.');
        this.loadingBulkAI = false;
        return;
      }

      let completed = 0;
      const updateProgress = () => {
        completed++;
        this.progressPercentage = Math.round((completed / totalQuestions) * 100);
      };

      await this.generateQuestionsByType('0', this.bulkAIConfig.multipleChoice, totalQuestions, updateProgress);
      await this.generateQuestionsByType('1', this.bulkAIConfig.trueFalse, totalQuestions, updateProgress);
      await this.generateQuestionsByType('2', this.bulkAIConfig.identification, totalQuestions, updateProgress);
      await this.generateQuestionsByType('3', this.bulkAIConfig.essay, totalQuestions, updateProgress);

      this.API.successSnackbar('All questions generated successfully!');
      this.showBulkAIModal = false;
    } catch (error) {
      console.error('Error generating bulk questions:', error);
      this.API.failedSnackbar('Error generating questions. Please try again.');
    } finally {
      this.loadingBulkAI = false;
    }
  }

  async generateQuestionsByType(type: string, count: number, total: number, updateProgress: () => void): Promise<void> {
    for (let i = 0; i < count; i++) {
      let question;
      let attempts = 0;
      const maxRetries = 5;
      while (attempts < maxRetries) {
        try {
          question = await this.generateSingleQuestion(type);
          this.questions.push(question);
          updateProgress();
          break;
        } catch (error: any) {
          attempts++;
          console.warn(`Retrying (${attempts}/${maxRetries}) for type ${type} due to API rate limit...`);
          if (error.message?.includes('429')) {
            const delay = Math.pow(2, attempts) * 500;
            await new Promise((resolve) => setTimeout(resolve, delay));
          } else {
            this.API.failedSnackbar(`Error generating question: ${error.message || 'Unknown error'}`);
            break;
          }
        }
      }
    }
  }

  async generateSingleQuestion(type: string): Promise<any> {
    const fullPrompt = `Create a ${this.types[Number(type)]} question. Do not include answers in the question itself.`;
    const questionText = await this.API.analyzeEssay(fullPrompt);
    let options: { value: string; active: boolean }[] = [];
    let correctAnswer = '';

    if (type === '0') {
      const correctPrompt = `Provide the correct answer for: "${questionText}".`;
      correctAnswer = await this.API.analyzeEssay(correctPrompt);
      const choicesPrompt = `Generate 3 incorrect but plausible answers for: "${questionText}".`;
      const incorrectChoices = await this.API.analyzeEssay(choicesPrompt);
      const cleanedCorrectAnswer = this.cleanAIResponse(correctAnswer);
      const incorrectArray = incorrectChoices
        .split('\n')
        .map(this.cleanAIResponse)
        .filter((opt) => opt.trim())
        .slice(0, 3);
      incorrectArray.push(cleanedCorrectAnswer);
      const shuffledChoices = incorrectArray.sort(() => Math.random() - 0.5);
      options = shuffledChoices.map((choice) => ({
        value: choice,
        active: choice === cleanedCorrectAnswer,
      }));
    } else if (type === '1') {
      const tfAnswer = await this.API.analyzeEssay(
        `Is the statement "${questionText}" true or false? Reply only with 'T' or 'F'.`
      );
      correctAnswer = tfAnswer.includes('T') ? 'T' : 'F';
    } else if (type === '2') {
      correctAnswer = await this.API.analyzeEssay(`Provide a short answer for: "${questionText}".`);
    } else if (type === '3') {
      correctAnswer = '{{auto-checked}}';
    }

    return { type, question: { value: questionText, attachments: [] }, options, answer: correctAnswer };
  }

  cleanAIResponse(response: string): string {
    return response
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/^\d+\.\s*/, '')
      .replace(/^[A-D]\.\s*/, '')
      .replace(/^[•\-]\s*/, '')
      .replace(/Here are.*answers:/gi, '')
      .trim();
  }

  private _tempSelections: { classId: string; lesson: string; topic: string } | null = null;

  onPreTestToggle(): void {
    if (this.isPreTest) {
      this._tempSelections = {
        classId: this.selectedClassID,
        lesson: this.lesson,
        topic: this.topic,
      };
      this.selectedClassID = '';
      this.lesson = '';
      this.topic = '';
      this.topics = [];
      this.lessons = [];
    } else if (this._tempSelections) {
      this.selectedClassID = this._tempSelections.classId || '';
      this.lesson = this._tempSelections.lesson || '';
      this.topic = this._tempSelections.topic || '';
      if (this.selectedClassID) this.onClassSelectionChange();
    }
  }

  closeModal(): void {
    this.closed.emit();
  }

  setSingleAnswer(index: number, question: any): void {
  question.answer = index.toString(); // Store as string '0', '1', '2', or '3'
  question.options.forEach((opt: any, i: number) => {
    opt.active = i === index; // Set only the selected option as active
  });
  }
  
}