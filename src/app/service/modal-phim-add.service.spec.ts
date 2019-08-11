import { TestBed } from '@angular/core/testing';

import { ModalPhimAddService } from './modal-phim-add.service';

describe('ModalPhimAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalPhimAddService = TestBed.get(ModalPhimAddService);
    expect(service).toBeTruthy();
  });
});
