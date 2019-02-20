import { TestBed, inject } from '@angular/core/testing';

import { QueueNumService } from './queue-num.service';

describe('QueueNumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueueNumService]
    });
  });

  it('should be created', inject([QueueNumService], (service: QueueNumService) => {
    expect(service).toBeTruthy();
  }));
});
