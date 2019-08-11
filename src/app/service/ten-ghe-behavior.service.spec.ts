import { TestBed } from '@angular/core/testing';

import { TenGheBehaviorService } from './ten-ghe-behavior.service';

describe('TenGheBehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenGheBehaviorService = TestBed.get(TenGheBehaviorService);
    expect(service).toBeTruthy();
  });
});
