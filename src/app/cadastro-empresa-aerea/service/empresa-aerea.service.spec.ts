import { TestBed } from '@angular/core/testing';

import { EmpresaAereaService } from './empresa-aerea.service';

describe('EmpresaAereaService', () => {
  let service: EmpresaAereaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaAereaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
