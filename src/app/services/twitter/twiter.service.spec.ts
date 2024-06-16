import { TestBed } from '@angular/core/testing';

import { TwiterService } from './twiter.service';

describe('TwiterService', () => {
  let service: TwiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
