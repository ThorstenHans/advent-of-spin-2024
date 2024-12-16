import { TestBed } from '@angular/core/testing';

import { NaughtyOrNiceService } from './naughty-or-nice.service';

describe('NaughtyOrNiceService', () => {
  let service: NaughtyOrNiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaughtyOrNiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
