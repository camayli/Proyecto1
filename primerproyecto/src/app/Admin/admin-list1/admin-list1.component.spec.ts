import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminList1Component } from './admin-list1.component';

describe('AdminList1Component', () => {
  let component: AdminList1Component;
  let fixture: ComponentFixture<AdminList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
