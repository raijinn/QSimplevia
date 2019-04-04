import { TestBed, inject } from '@angular/core/testing';

import { DelTellerService } from './del-teller.service';

describe('DelTellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelTellerService]
    });
  });

  it('should be created', inject([DelTellerService], (service: DelTellerService) => {
    expect(service).toBeTruthy();
  }));
});
