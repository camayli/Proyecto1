import { TestBed } from '@angular/core/testing';

import { CoordiService } from './coordi.service';

describe('CoordiService', () => {
  let service: CoordiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
