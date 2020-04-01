import { Component, OnInit } from '@angular/core';
import { Admin } from "../shared/admin";
import {AdminService } from "../shared/admin.service";

@Component({
  selector: 'app-admin-list1',
  templateUrl: './admin-list1.component.html',
  styleUrls: ['./admin-list1.component.css']
})
export class AdminList1Component implements OnInit {
  admin: Admin[] = [];

  constructor(private adminservice: AdminService) {}

  ngOnInit() {
    this.findadmin();
  }

  findadmin() {
    this.adminservice.findAll().subscribe(
      results => {
        console.log(results);
        this.admin = results;
      },
      error => console.error(error)
    );
  }
}

