import { TestBed } from '@angular/core/testing';

import { PanchorepuestosService } from './panchorepuestos.service';

describe('PanchorepuestosService', () => {
  let service: PanchorepuestosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanchorepuestosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
