import { TestBed } from '@angular/core/testing';

import { GetTellerService } from './get-teller.service';

describe('GetTellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTellerService = TestBed.get(GetTellerService);
    expect(service).toBeTruthy();
  });
});
