import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormComponent} from './components/form/form.component';
import {NavbarComponent} from './components/admin/navbar/navbar.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {AdminLoginComponent} from './components/admin/admin-login/admin-login.component';
import {AdminLogoutComponent} from './components/admin/admin-logout/admin-logout.component';
import {TeacherComponent} from './components/admin/admin-dashboard/teacher/teacher.component';
import {ModuleComponent} from './components/admin/admin-dashboard/module/module.component';
import {SubjectComponent} from './components/admin/admin-dashboard/subject/subject.component';
import {DashboardOverviewComponent} from './components/admin/admin-dashboard/dashboard-overview/dashboard-overview.component';
import {AdminInterceptorService} from './services/admin-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FormComponent,
    NavbarComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    TeacherComponent,
    ModuleComponent,
    SubjectComponent,
    DashboardOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AdminInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
