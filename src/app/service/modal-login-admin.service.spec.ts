import { TestBed } from '@angular/core/testing';

import { ModalLoginAdminService } from './modal-login-admin.service';

describe('ModalLoginAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalLoginAdminService = TestBed.get(ModalLoginAdminService);
    expect(service).toBeTruthy();
  });
});
