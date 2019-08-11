import { TestBed } from '@angular/core/testing';

import { PhimServiceService } from './phim-service.service';

describe('PhimServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhimServiceService = TestBed.get(PhimServiceService);
    expect(service).toBeTruthy();
  });
});
