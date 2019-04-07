import { TestBed, inject } from '@angular/core/testing';

import { TellerDataService } from './teller-data.service';

describe('TellerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TellerDataService]
    });
  });

  it('should be created', inject([TellerDataService], (service: TellerDataService) => {
    expect(service).toBeTruthy();
  }));
});
