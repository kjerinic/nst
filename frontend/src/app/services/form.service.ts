import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../domain/Module';
import {Subject} from '../domain/Subject';
import {Teacher} from '../domain/Teacher';
import {EvaluationForm} from '../domain/EvaluationForm';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) { }

  private getUrl(functionName: string): string {
    const url = 'http://localhost:8080/';
    return url + functionName;
  }

  getAllModules(): Observable<Module[]> {
    const url = this.getUrl('module/all');
    return this.http.get<Module[]>(url);
  }

  getAllSubjects(): Observable<Subject[]> {
    const url = this.getUrl('subject/all');
    return this.http.get<Subject[]>(url);
  }

  getAllTeachers(): Observable<Teacher[]> {
    const url = this.getUrl('teacher/all');
    return this.http.get<Teacher[]>(url);
  }

  saveEvaluationForm(evaluationForm: EvaluationForm): Observable<any> {
    const url = this.getUrl('???');
    const body = {
      evaluationForm
    };
    return this.http.post<any>(url, body);
  }
}
