import { Component, OnInit } from '@angular/core';
import { Admin } from "../shared/admin";
import {AdminService } from "../shared/admin.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
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

