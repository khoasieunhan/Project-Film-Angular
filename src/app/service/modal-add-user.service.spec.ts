import { TestBed } from '@angular/core/testing';

import { ModalAddUserService } from './modal-add-user.service';

describe('ModalAddUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalAddUserService = TestBed.get(ModalAddUserService);
    expect(service).toBeTruthy();
  });
});
