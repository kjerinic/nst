import {Module} from './Module';
import {Subject} from './Subject';
import {Teacher} from './Teacher';

export class EvaluationForm {
  Module: Module;
  Subject: Subject;
  Teacher: Teacher;
  NumOfHours: number;
  AverageGradeGroup: number;
  PaymentStatus: PaymentStatus;
  FirstEnrollment: boolean;
  PassedExam: boolean;
  RegularAttendance: boolean;
  Question1: number;
  Question2: number;
  Question3: number;
  Question4: number;
  Question5: number;
  Question6: number;
  Question7: number;
  Question8: number;
  Question9: number;
  Question10: number;
  Question11: number;
  Question12: number;
  Comment: string;
}

export enum PaymentStatus {
  SAMOFINANSIRANJE = 'SAMOFINANSIRANJE',
  BUDZET = 'BUDŽET',
}
