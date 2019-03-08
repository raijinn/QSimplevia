import { TestBed, inject } from '@angular/core/testing';

import { DelDeptService } from './del-dept.service';

describe('DelDeptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelDeptService]
    });
  });

  it('should be created', inject([DelDeptService], (service: DelDeptService) => {
    expect(service).toBeTruthy();
  }));
});
