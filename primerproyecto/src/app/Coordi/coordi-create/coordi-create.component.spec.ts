import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordiCreateComponent } from './coordi-create.component';

describe('CoordiCreateComponent', () => {
  let component: CoordiCreateComponent;
  let fixture: ComponentFixture<CoordiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
