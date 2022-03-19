import { TestBed } from '@angular/core/testing';

import { RiskMatrixService } from './risk-matrix.service';

describe('RiskMatrixService', () => {
  let service: RiskMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
