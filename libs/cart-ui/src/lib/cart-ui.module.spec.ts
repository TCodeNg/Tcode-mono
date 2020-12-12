import { async, TestBed } from '@angular/core/testing';
import { CartUiModule } from './cart-ui.module';

describe('CartUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CartUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CartUiModule).toBeDefined();
  });
});
