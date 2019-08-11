import { TestBed } from '@angular/core/testing';

import { ModalHistoryService } from './modal-history.service';

describe('ModalHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalHistoryService = TestBed.get(ModalHistoryService);
    expect(service).toBeTruthy();
  });
});
