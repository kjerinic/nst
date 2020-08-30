import {Module} from './Module';
import {Subject} from './Subject';
import {Teacher} from './Teacher';

export class EvaluationForm {
  module: Module;
  subject: Subject;
  teacher: Teacher;
  numOfHours: number;
  averageGradeGroup: number;
  paymentStatus: PaymentStatus;
  firstEnrollment: boolean;
  passedExam: boolean;
  regularAttendance: boolean;
  question1: number;
  question2: number;
  question3: number;
  question4: number;
  question5: number;
  question6: number;
  question7: number;
  question8: number;
  question9: number;
  question10: number;
  question11: number;
  question12: number;
  comment: string;
}

export enum PaymentStatus {
  SAMOFINANSIRANJE = 'SAMOFINANSIRANJE',
  BUDZET = 'BUDŽET',
}
