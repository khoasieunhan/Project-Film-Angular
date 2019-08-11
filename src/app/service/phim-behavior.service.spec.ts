import { TestBed } from '@angular/core/testing';

import { PhimBehaviorService } from './phim-behavior.service';

describe('PhimBehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhimBehaviorService = TestBed.get(PhimBehaviorService);
    expect(service).toBeTruthy();
  });
});
