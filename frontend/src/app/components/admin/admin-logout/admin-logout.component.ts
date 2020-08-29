import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.sass']
})
export class AdminLogoutComponent implements OnInit {
  logoutMsg: string;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.logoutMsg = 'Više niste prijavljeni kao admin.';
    this.adminService.logOut();
  }

}
