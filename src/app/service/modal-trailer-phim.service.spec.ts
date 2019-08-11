import { TestBed } from '@angular/core/testing';

import { ModalTrailerPhimService } from './modal-trailer-phim.service';

describe('ModalTrailerPhimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalTrailerPhimService = TestBed.get(ModalTrailerPhimService);
    expect(service).toBeTruthy();
  });
});
