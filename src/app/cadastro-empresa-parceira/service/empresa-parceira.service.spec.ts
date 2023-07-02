import { TestBed } from '@angular/core/testing';

import { EmpresaParceiraService } from './empresa-parceira.service';

describe('EmpresaParceiraService', () => {
  let service: EmpresaParceiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaParceiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
