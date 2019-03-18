import { TestBed } from '@angular/core/testing';

import { PostTellerService } from './post-teller.service';

describe('PostTellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostTellerService = TestBed.get(PostTellerService);
    expect(service).toBeTruthy();
  });
});
