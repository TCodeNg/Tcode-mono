import { TestBed, waitForAsync } from '@angular/core/testing';
import { CartUiModule } from './cart-ui.module';

describe('CartUiModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CartUiModule).toBeDefined();
  });
});
