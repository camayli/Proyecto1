import { Component, OnInit } from '@angular/core';
import { Admin } from '../shared/admin';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  admin: Admin = null;

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.adminService.findById(+params.get('id')))
      )
      .subscribe(result => {
        this.admin = result;
      });
  }

  update() {
    console.log(this.admin);
    this.adminService.update(this.admin).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/admin/view/${this.admin.id}`]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }

  cancel() {
    this.router.navigate([`/admin/view/${this.admin.id}`]);
  }
}

