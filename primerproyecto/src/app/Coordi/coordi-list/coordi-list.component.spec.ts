import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordiListComponent } from './coordi-list.component';

describe('CoordiListComponent', () => {
  let component: CoordiListComponent;
  let fixture: ComponentFixture<CoordiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
