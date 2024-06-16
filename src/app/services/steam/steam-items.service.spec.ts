import { TestBed } from '@angular/core/testing';

import { SteamItemsService } from './steam-items.service';

describe('SteamItemsService', () => {
  let service: SteamItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
