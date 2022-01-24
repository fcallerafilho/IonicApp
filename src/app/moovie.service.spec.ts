import { TestBed } from '@angular/core/testing';

import { MoovieService } from './moovie.service';

describe('MoovieService', () => {
  let service: MoovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
