import { TestBed, inject } from '@angular/core/testing';

import { GetDeptDataService } from './get-dept-data.service';

describe('GetDeptDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDeptDataService]
    });
  });

  it('should be created', inject([GetDeptDataService], (service: GetDeptDataService) => {
    expect(service).toBeTruthy();
  }));
});
