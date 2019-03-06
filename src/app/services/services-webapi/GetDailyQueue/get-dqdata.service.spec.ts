import { TestBed, inject } from '@angular/core/testing';

import { GetDQdataService } from './get-dqdata.service';

describe('GetDQdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDQdataService]
    });
  });

  it('should be created', inject([GetDQdataService], (service: GetDQdataService) => {
    expect(service).toBeTruthy();
  }));
});
