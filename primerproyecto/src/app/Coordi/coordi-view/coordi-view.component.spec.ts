import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordiViewComponent } from './coordi-view.component';

describe('CoordiViewComponent', () => {
  let component: CoordiViewComponent;
  let fixture: ComponentFixture<CoordiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
