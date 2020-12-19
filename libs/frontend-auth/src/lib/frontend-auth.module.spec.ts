import { TestBed, waitForAsync } from '@angular/core/testing';
import { FrontendAuthModule } from './frontend-auth.module';

describe('FrontendAuthModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FrontendAuthModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendAuthModule).toBeDefined();
  });
});
