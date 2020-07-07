import { async, TestBed } from '@angular/core/testing';
import { FrontendAuthModule } from './frontend-auth.module';

describe('FrontendAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FrontendAuthModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FrontendAuthModule).toBeDefined();
  });
});
