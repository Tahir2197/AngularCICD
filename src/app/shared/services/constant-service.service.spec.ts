import { TestBed } from '@angular/core/testing';

import { ConstantServiceService } from './constant-service.service';

describe('ConstantServiceService', () => {
  let service: ConstantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
