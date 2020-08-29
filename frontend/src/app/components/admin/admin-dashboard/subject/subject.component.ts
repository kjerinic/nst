import { Component, OnInit } from '@angular/core';
import {checkFormGroupErrors} from '../../../../utils/formUtils';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from '../../../../domain/Subject';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormService} from '../../../../services/form.service';
import {AdminService} from '../../../../services/admin.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {
  subjectFormGroup: FormGroup;
  subject: Subject;
  allSubjects: Subject[];

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private formService: FormService,
              private snackBar: MatSnackBar) {
    this.subject = new Subject();
    this.subjectFormGroup = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  showAllSubjects() {
    this.formService.getAllSubjects().subscribe(data => {
        this.allSubjects = data;
      },
      error => {
        console.log(error);
      });
  }

  private createFormGroup() {
    return this.formBuilder.group({
      SubjectName: [this.subject.name, [Validators.required, Validators.pattern('(.|\\s)*\\S(.|\\s)*')]],
    });
  }

  hasError(error: string, control: string) {
    return checkFormGroupErrors(this.subjectFormGroup, error, control);
  }

  addSubject() {
    this.adminService.addSubject(this.formValueToDTO(this.subjectFormGroup))
      .subscribe(() => {
          this.snackBar.open('Uspešno unet predmet.', null, {
            duration: 3000
          });
          this.subjectFormGroup.reset();
          this.showAllSubjects();
        },
        error => {
          this.snackBar.open('Greška pri čuvanju predmeta.', null, {
            duration: 3000
          });
          console.log(error);
        });
  }

  private formValueToDTO(formObject: FormGroup): Subject {
    const formValue = formObject.value;

    this.subject.name = formValue.SubjectName;

    return this.subject;
  }
}
