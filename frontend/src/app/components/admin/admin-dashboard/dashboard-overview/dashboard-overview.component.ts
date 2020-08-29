import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../../domain/Teacher';
import {FormService} from '../../../../services/form.service';
import {AdminService} from '../../../../services/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TeacherEvaluationOverview} from '../../../../domain/TeacherEvaluationOverview';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.sass']
})
export class DashboardOverviewComponent implements OnInit {
  allTeachers: Teacher[];
  teacherEvaluationOverview: TeacherEvaluationOverview;

  constructor(private formService: FormService, private adminService: AdminService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.showAllTeachers();
  }

  private showAllTeachers() {
    this.formService.getAllTeachers().subscribe(data => {
        this.allTeachers = data;
      },
      error => {
        console.log(error);
      });
  }

  showEvaluationResults(teacherRowKey: number) {
    this.adminService.showEvaluationResults(teacherRowKey).subscribe(data => {
        this.teacherEvaluationOverview = data;
      },
      error => {
        this.snackBar.open(error.error.error, null, {
          duration: 3000
        });
        this.teacherEvaluationOverview = null;
      });
  }

}
