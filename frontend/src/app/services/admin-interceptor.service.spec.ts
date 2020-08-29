import { TestBed } from '@angular/core/testing';

import { AdminInterceptorService } from './admin-interceptor.service';

describe('AdminInterceptorService', () => {
  let service: AdminInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
