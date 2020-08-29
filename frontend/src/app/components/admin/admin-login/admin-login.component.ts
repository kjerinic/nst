import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLoginMsg: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) {
    this.loginForm = this.createFormGroup();
    this.invalidLoginMsg = '';
  }

  ngOnInit(): void {
    if (this.adminService.isAdminLoggedIn()) {
      this.router.navigate(['admin-dashboard']);
    }
  }

  logIn() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.adminService.authenticateAdmin(username, password).subscribe(data => {
      this.invalidLoginMsg = '';
      this.adminService.setAdminUsername(data.userName);
      this.router.navigate(['admin-dashboard']);
    }, () => {
      this.invalidLoginMsg = 'Neispravno korisničko ime ili šifra.';
      this.loginForm.reset();
    });
  }

  private createFormGroup() {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('(.|\\s)*\\S(.|\\s)*')]],
      password: ['', [Validators.required, Validators.pattern('(.|\\s)*\\S(.|\\s)*')]]
    });
  }


}
