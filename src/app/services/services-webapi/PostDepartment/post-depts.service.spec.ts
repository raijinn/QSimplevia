import { TestBed, inject } from '@angular/core/testing';

import { PostDeptsService } from './post-depts.service';

describe('PostDeptsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDeptsService]
    });
  });

  it('should be created', inject([PostDeptsService], (service: PostDeptsService) => {
    expect(service).toBeTruthy();
  }));
});
