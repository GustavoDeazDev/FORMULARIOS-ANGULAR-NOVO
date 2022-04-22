import { TestBed } from '@angular/core/testing';

import { NovocepserviceService } from './novocepservice.service';

describe('NovocepserviceService', () => {
  let service: NovocepserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovocepserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
