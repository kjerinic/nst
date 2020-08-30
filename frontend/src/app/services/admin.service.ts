import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Module} from '../domain/Module';
import {Subject} from '../domain/Subject';
import {Teacher} from '../domain/Teacher';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../domain/User';
import {TeacherEvaluationOverview} from '../domain/TeacherEvaluationOverview';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) {
  }

  private getUrl(functionName: string): string {
    const url = 'http://localhost:8080/';
    return url + functionName;
  }

  authenticateAdmin(username: string, password: string): Observable<User> {
    return this.httpClient.post<User>(this.getUrl('admin/login'),
      {
        username,
        password
      });
  }

  public getAdminUsername(): string {
    return sessionStorage.getItem('username');
  }

  public setAdminUsername(username: string) {
    sessionStorage.setItem('username', username);
  }

  isAdminLoggedIn() {
    return sessionStorage.getItem('username') !== null;
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  addTeacher(teacher: Teacher): Observable<boolean> {
    return this.httpClient.post<boolean>(this.getUrl('teacher/add'), teacher);
  }

  addSubject(subject: Subject): Observable<boolean> {
    return this.httpClient.post<boolean>(this.getUrl('subject/add'), subject);
  }

  addModule(module: Module): Observable<boolean> {
    return this.httpClient.post<boolean>(this.getUrl('module/add'), module);
  }

  showEvaluationResults(teacherId: number): Observable<TeacherEvaluationOverview> {
    const params = new HttpParams().set('id', String(teacherId));
    return this.httpClient.get<TeacherEvaluationOverview>(this.getUrl('evaluation/teacher'), {params});
  }

}
