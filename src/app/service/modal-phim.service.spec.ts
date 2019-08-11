import { TestBed } from '@angular/core/testing';

import { ModalPhimService } from './modal-phim.service';

describe('ModalPhimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalPhimService = TestBed.get(ModalPhimService);
    expect(service).toBeTruthy();
  });
});
