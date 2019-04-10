import { TestBed, inject } from '@angular/core/testing';

import { AuditTrailDataService } from './audit-trail-data.service';

describe('AuditTrailDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditTrailDataService]
    });
  });

  it('should be created', inject([AuditTrailDataService], (service: AuditTrailDataService) => {
    expect(service).toBeTruthy();
  }));
});
