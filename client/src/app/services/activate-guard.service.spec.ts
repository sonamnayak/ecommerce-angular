import { TestBed } from '@angular/core/testing';

import { ActivateGuardService } from './activate-guard.service';

describe('ActivateGuardService', () => {
  let service: ActivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
