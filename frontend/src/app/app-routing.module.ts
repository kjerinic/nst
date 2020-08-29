import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {FormComponent} from './components/form/form.component';
import {AdminLoginComponent} from './components/admin/admin-login/admin-login.component';
import {AdminLogoutComponent} from './components/admin/admin-logout/admin-logout.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {DashboardOverviewComponent} from './components/admin/admin-dashboard/dashboard-overview/dashboard-overview.component';
import {TeacherComponent} from './components/admin/admin-dashboard/teacher/teacher.component';
import {SubjectComponent} from './components/admin/admin-dashboard/subject/subject.component';
import {ModuleComponent} from './components/admin/admin-dashboard/module/module.component';
import {AdminRouteGuardService} from './services/admin-route-guard.service';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'form', component: FormComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-logout', component: AdminLogoutComponent,
    // canActivate: [AdminRouteGuardService]
  },
  {path: 'admin-dashboard',
    component: AdminDashboardComponent,
    // canActivate: [AdminRouteGuardService],
    children: [
      {path: '', component: DashboardOverviewComponent},
      {path: 'add-teacher', component: TeacherComponent},
      {path: 'add-subject', component: SubjectComponent},
      {path: 'add-module', component: ModuleComponent},
    ]
  },
  {path: '**', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
