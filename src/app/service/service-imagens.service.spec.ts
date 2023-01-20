import { TestBed } from '@angular/core/testing';

import { ServiceImagensService } from './service-imagens.service';

describe('ServiceImagensService', () => {
  let service: ServiceImagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceImagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
