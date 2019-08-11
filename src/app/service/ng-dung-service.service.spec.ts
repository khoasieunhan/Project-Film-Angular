import { TestBed } from '@angular/core/testing';

import { NgDungServiceService } from './ng-dung-service.service';

describe('NgDungServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDungServiceService = TestBed.get(NgDungServiceService);
    expect(service).toBeTruthy();
  });
});
