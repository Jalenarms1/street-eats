import { TestBed } from '@angular/core/testing';

import { ShopSearchService } from './shop-search.service';

describe('ShopSearchService', () => {
  let service: ShopSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
