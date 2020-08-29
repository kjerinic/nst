import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  showAddTeacher() {
    this.router.navigate(['/admin-dashboard/add-teacher']);
  }

  showAddSubject() {
    this.router.navigate(['/admin-dashboard/add-subject']);
  }

  showAddModule() {
    this.router.navigate(['/admin-dashboard/add-module']);
  }

  showEvaluationOverview() {
    this.router.navigate(['/admin-dashboard']);
  }

}
