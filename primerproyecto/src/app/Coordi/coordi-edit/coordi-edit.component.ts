import { Component, OnInit } from '@angular/core';
import { Coordi } from '../shared/coordi';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordiService } from '../shared/coordi.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-coordi-edit',
  templateUrl: './coordi-edit.component.html',
  styleUrls: ['./coordi-edit.component.css']
})
export class CoordiEditComponent implements OnInit {
  coordi: Coordi = null;

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coordiService: CoordiService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.coordiService.findById(+params.get('id')))
      )
      .subscribe(result => {
        this.coordi = result;
      });
  }

  update() {
    console.log(this.coordi);
    this.coordiService.update(this.coordi).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/coordi/view/${this.coordi.id}`]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }

  cancel() {
    this.router.navigate([`/coordi/view/${this.coordi.id}`]);
  }
}
