import { TestBed } from '@angular/core/testing';

import { LinkExtractorService } from '../../link-extractor.service';

describe('LinkExtractorService', () => {
  let service: LinkExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
