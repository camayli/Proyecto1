import { Component, OnInit } from '@angular/core';
import { Coordi } from '../shared/coordi';
import { CoordiService } from '../shared/coordi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-coordi-view',
  templateUrl: './coordi-view.component.html',
  styleUrls: ['./coordi-view.component.css']
})
export class CoordiViewComponent implements OnInit {
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
        console.log(result);
        this.coordi = result;
      });
  }

  backToList() {
    this.router.navigate(['/coordi/list']);
  }
}
