import { TestBed, inject } from '@angular/core/testing';

import { GetAnnouncementDataService } from './get-announcement-data.service';

describe('GetAnnouncementDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAnnouncementDataService]
    });
  });

  it('should be created', inject([GetAnnouncementDataService], (service: GetAnnouncementDataService) => {
    expect(service).toBeTruthy();
  }));
});
