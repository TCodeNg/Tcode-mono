import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { AuthState } from './+state/auth.state';

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;
  let service: AuthService;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptor,
      {
        provide: AuthService,
        useValue: {}
      },
      {
        provide: AuthState,
        useValue: {
          snapshot: {}
        }
      }
    ]
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(AuthInterceptor);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
