import { TestBed, inject } from '@angular/core/testing';

import { PutTellerService } from './put-teller.service';

describe('PutTellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PutTellerService]
    });
  });

  it('should be created', inject([PutTellerService], (service: PutTellerService) => {
    expect(service).toBeTruthy();
  }));
});
