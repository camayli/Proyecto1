import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Coordi } from '../shared/coordi';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordiService } from '../shared/coordi.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-coordi-create',
  templateUrl: './coordi-create.component.html',
  styleUrls: ['./coordi-create.component.css']
})
export class CoordiCreateComponent implements OnInit {
  @ViewChild('createForm', { static: true })
  createForm;

  submitted = false;

  coordi: Coordi = new Coordi(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coordiService: CoordiService
  ) {}

  ngOnInit() {}

  create() {
    this.submitted = true;
    console.log(this.coordi);
    this.coordiService.create(this.coordi).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/coordi/list`]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
        this.submitted = false;
      }
    );
  }

  cancel() {
    this.router.navigate([`/coordi/list`]);
  }

  get canSubmit() {
    return this.createForm.form.valid && !this.submitted;
  }
}
