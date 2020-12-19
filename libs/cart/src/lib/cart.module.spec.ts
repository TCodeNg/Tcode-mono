import { TestBed, waitForAsync } from '@angular/core/testing';
import { CartModule } from './cart.module';

describe('CartModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CartModule).toBeDefined();
  });
});
