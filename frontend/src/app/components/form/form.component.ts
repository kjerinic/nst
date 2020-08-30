import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EvaluationForm} from '../../domain/EvaluationForm';
import {Module} from '../../domain/Module';
import {Subject} from '../../domain/Subject';
import {Teacher} from '../../domain/Teacher';
import {FormService} from '../../services/form.service';
import {checkFormGroupErrors} from '../../utils/formUtils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  evalFormGroup: FormGroup;
  evalForm: EvaluationForm;
  modules: Module[];
  subjects: Subject[];
  teachers: Teacher[];
  formTitle: string;
  dateToday: Date;

  constructor(private formService: FormService,
              private router: Router,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar
  ) {
    this.formTitle = 'Anketa o vrednovanju pedagoškog rada nastavnika i saradnika Fakulteta organizacionih nauka Univerziteta u Beogradu';
    this.evalForm = new EvaluationForm();
    this.evalFormGroup = this.createFormGroup();
  }

  ngOnInit(): void {
    this.getAllModules();
    this.getAllSubjects();
    this.getAllTeachers();
    this.dateToday = new Date();
  }

  private createFormGroup() {
    return this.formBuilder.group({
      module: [this.evalForm.module, [Validators.required]],
      subject: [this.evalForm.subject, [Validators.required]],
      teacher: [this.evalForm.teacher, [Validators.required]],
      numOfHours: [this.evalForm.numOfHours, [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      averageGradeGroup: [this.evalForm.averageGradeGroup, [Validators.required]],
      paymentStatus: [this.evalForm.paymentStatus, [Validators.required]],
      firstEnrollment: [this.evalForm.firstEnrollment, [Validators.required]],
      passedExam: [this.evalForm.passedExam, [Validators.required]],
      regularAttendance: [this.evalForm.regularAttendance, [Validators.required]],
      question1: [this.evalForm.question1, [Validators.required]],
      question2: [this.evalForm.question2, [Validators.required]],
      question3: [this.evalForm.question3, [Validators.required]],
      question4: [this.evalForm.question4, [Validators.required]],
      question5: [this.evalForm.question5, [Validators.required]],
      question6: [this.evalForm.question6, [Validators.required]],
      question7: [this.evalForm.question7, [Validators.required]],
      question8: [this.evalForm.question8, [Validators.required]],
      question9: [this.evalForm.question9, [Validators.required]],
      question10: [this.evalForm.question10, [Validators.required]],
      question11: [this.evalForm.question11, [Validators.required]],
      question12: [this.evalForm.question12, [Validators.required]],
      comment: [this.evalForm.comment]
    });
  }

  private getAllModules() {
    this.formService.getAllModules().subscribe(data => {
        this.modules = data;
      },
      error => {
        console.log(error);
      });
  }

  private getAllSubjects() {
    this.formService.getAllSubjects().subscribe(data => {
        this.subjects = data;
      },
      error => {
        console.log(error);
      });
  }

  private getAllTeachers() {
    this.formService.getAllTeachers().subscribe(data => {
        this.teachers = data;
      },
      error => {
        console.log(error);
      });
  }

  hasError(error: string, control: string) {
    return checkFormGroupErrors(this.evalFormGroup, error, control);
  }

  private formValueToDTO(formObject: FormGroup): EvaluationForm {
    const formValue = formObject.value;

    this.evalForm.module = formValue.module;
    this.evalForm.subject = formValue.subject;
    this.evalForm.numOfHours = +formValue.numOfHours;
    this.evalForm.teacher = formValue.teacher;
    this.evalForm.averageGradeGroup = formValue.averageGradeGroup;
    this.evalForm.paymentStatus = formValue.paymentStatus;
    this.evalForm.firstEnrollment = formValue.firstEnrollment;
    this.evalForm.passedExam = formValue.passedExam;
    this.evalForm.regularAttendance = formValue.regularAttendance;
    this.evalForm.question1 = formValue.question1;
    this.evalForm.question2 = formValue.question2;
    this.evalForm.question3 = formValue.question3;
    this.evalForm.question4 = formValue.question4;
    this.evalForm.question5 = formValue.question5;
    this.evalForm.question6 = formValue.question6;
    this.evalForm.question7 = formValue.question7;
    this.evalForm.question8 = formValue.question8;
    this.evalForm.question9 = formValue.question9;
    this.evalForm.question10 = formValue.question10;
    this.evalForm.question11 = formValue.question11;
    this.evalForm.question12 = formValue.question12;
    this.evalForm.comment = formValue.comment;

    return this.evalForm;
  }

  saveNewEvalForm() {
    this.formService.saveEvaluationForm(this.formValueToDTO(this.evalFormGroup))
      .subscribe(() => {
          this.snackBar.open('Hvala na popunjavanju ankete, Vaš odgovor je zabeležen.', null, {
            duration: 3000
          })
            .afterDismissed().subscribe(() => {
            this.router.navigate(['']);
          });

          this.evalFormGroup.reset();
        },
        error => {
          this.snackBar.open('Greška pri čuvanju ankete.', null, {
            duration: 3000
          });
          console.log(error);
          this.router.navigate(['']);
        });
  }
}
