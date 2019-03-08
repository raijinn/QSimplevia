import { TestBed, inject } from '@angular/core/testing';

import { PutDeptService } from './put-dept.service';

describe('PutDeptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PutDeptService]
    });
  });

  it('should be created', inject([PutDeptService], (service: PutDeptService) => {
    expect(service).toBeTruthy();
  }));
});
