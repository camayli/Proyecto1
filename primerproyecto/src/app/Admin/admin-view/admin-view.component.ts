import { Component, OnInit } from '@angular/core';
import { Admin } from '../shared/admin';
import { AdminService } from '../shared/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
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
        console.log(result);
        this.admin = result;
      });
  }

  backToList() {
    this.router.navigate(['/admin/list']);
  }
}

