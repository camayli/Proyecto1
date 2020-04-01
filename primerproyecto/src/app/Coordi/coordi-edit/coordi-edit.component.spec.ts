import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordiEditComponent } from './coordi-edit.component';

describe('CoordiEditComponent', () => {
  let component: CoordiEditComponent;
  let fixture: ComponentFixture<CoordiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
