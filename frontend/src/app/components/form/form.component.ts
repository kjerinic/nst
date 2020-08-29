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
      Module: [this.evalForm.Module, [Validators.required]],
      Subject: [this.evalForm.Subject, [Validators.required]],
      Teacher: [this.evalForm.Teacher, [Validators.required]],
      NumOfHours: [this.evalForm.NumOfHours, [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      AverageGradeGroup: [this.evalForm.AverageGradeGroup, [Validators.required]],
      PaymentStatus: [this.evalForm.PaymentStatus, [Validators.required]],
      FirstEnrollment: [this.evalForm.FirstEnrollment, [Validators.required]],
      PassedExam: [this.evalForm.PassedExam, [Validators.required]],
      RegularAttendance: [this.evalForm.RegularAttendance, [Validators.required]],
      Question1: [this.evalForm.Question1, [Validators.required]],
      Question2: [this.evalForm.Question2, [Validators.required]],
      Question3: [this.evalForm.Question3, [Validators.required]],
      Question4: [this.evalForm.Question4, [Validators.required]],
      Question5: [this.evalForm.Question5, [Validators.required]],
      Question6: [this.evalForm.Question6, [Validators.required]],
      Question7: [this.evalForm.Question7, [Validators.required]],
      Question8: [this.evalForm.Question8, [Validators.required]],
      Question9: [this.evalForm.Question9, [Validators.required]],
      Question10: [this.evalForm.Question10, [Validators.required]],
      Question11: [this.evalForm.Question11, [Validators.required]],
      Question12: [this.evalForm.Question12, [Validators.required]],
      Comment: [this.evalForm.Comment]
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

    this.evalForm.Module = formValue.Module;
    this.evalForm.Subject = formValue.Subject;
    this.evalForm.NumOfHours = +formValue.NumOfHours;
    this.evalForm.Teacher = formValue.Teacher;
    this.evalForm.AverageGradeGroup = formValue.AverageGradeGroup;
    this.evalForm.PaymentStatus = formValue.PaymentStatus;
    this.evalForm.FirstEnrollment = formValue.FirstEnrollment;
    this.evalForm.PassedExam = formValue.PassedExam;
    this.evalForm.RegularAttendance = formValue.RegularAttendance;
    this.evalForm.Question1 = formValue.Question1;
    this.evalForm.Question2 = formValue.Question2;
    this.evalForm.Question3 = formValue.Question3;
    this.evalForm.Question4 = formValue.Question4;
    this.evalForm.Question5 = formValue.Question5;
    this.evalForm.Question6 = formValue.Question6;
    this.evalForm.Question7 = formValue.Question7;
    this.evalForm.Question8 = formValue.Question8;
    this.evalForm.Question9 = formValue.Question9;
    this.evalForm.Question10 = formValue.Question10;
    this.evalForm.Question11 = formValue.Question11;
    this.evalForm.Question12 = formValue.Question12;
    this.evalForm.Comment = formValue.Comment;

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
