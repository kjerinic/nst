import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AdminService} from './admin.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInterceptorService implements HttpInterceptor {

  constructor(private adminService: AdminService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const adminUsername = this.adminService.getAdminUsername();
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `${adminUsername}`),
    });
    return next.handle(modifiedReq);
  }
}
