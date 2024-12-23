import { TestBed } from '@angular/core/testing';

import { GiftSuggestionsService } from './gift-suggestions.service';

describe('GiftSuggestionsService', () => {
  let service: GiftSuggestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftSuggestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
