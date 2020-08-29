import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../../domain/Teacher';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormService} from '../../../../services/form.service';
import {AdminService} from '../../../../services/admin.service';
import {checkFormGroupErrors} from '../../../../utils/formUtils';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.sass']
})
export class TeacherComponent implements OnInit {
  teacherFormGroup: FormGroup;
  teacher: Teacher;
  // titles: string[];
  // ranks: string[];
  allTeachers: Teacher[];

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private formService: FormService,
              private snackBar: MatSnackBar) {
    this.teacher = new Teacher();
    this.teacherFormGroup = this.createFormGroup();
  }

  ngOnInit(): void {
    // this.titles = ['dr', 'mr'];
    // this.ranks = ['Redovni profesor', 'Vanredni profesor', 'Docent', 'Asistent'];
  }

  private createFormGroup() {
    return this.formBuilder.group({
      FirstName: [this.teacher.firstName, [Validators.required, Validators.pattern('(.|\\s)*\\S(.|\\s)*')]],
      LastName: [this.teacher.lastName, [Validators.required]]
    });
  }

  hasError(error: string, control: string) {
    return checkFormGroupErrors(this.teacherFormGroup, error, control);
  }

  private formValueToDTO(formObject: FormGroup): Teacher {
    const formValue = formObject.value;

    this.teacher.firstName = formValue.FirstName;
    this.teacher.lastName = formValue.LastName;

    console.log(this.teacher);

    return this.teacher;
  }

  addTeacher() {
    this.adminService.addTeacher(this.formValueToDTO(this.teacherFormGroup))
      .subscribe(() => {
          this.snackBar.open('Uspešno unet nastavnik.', null, {
            duration: 3000
          });
          this.teacherFormGroup.reset();
          this.showAllTeachers();
        },
        error => {
          this.snackBar.open('Greška pri čuvanju nastavnika.', null, {
            duration: 3000
          });
          console.log(error);
        });
  }

  showAllTeachers() {
    this.formService.getAllTeachers().subscribe(data => {
        this.allTeachers = data;
      },
      error => {
        console.log(error);
      });
  }
}
