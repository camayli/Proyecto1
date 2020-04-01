import { Component, OnInit } from '@angular/core';
import { Coordi } from "../shared/coordi";
import { CoordiService } from "../shared/coordi.service";

@Component({
  selector: 'app-coordi-list',
  templateUrl: './coordi-list.component.html',
  styleUrls: ['./coordi-list.component.css']
})
export class CoordiListComponent implements OnInit {
  coordi: Coordi[] = [];

  constructor(private coordiservice: CoordiService) {}

  ngOnInit() {
    this.findcoordi();
  }

  findcoordi() {
    this.coordiservice.findAll().subscribe(
      results => {
        console.log(results);
        this.coordi = results;
      },
      error => console.error(error)
    );
  }
}

