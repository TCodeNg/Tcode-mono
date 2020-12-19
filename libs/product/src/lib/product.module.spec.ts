import { TestBed, waitForAsync } from '@angular/core/testing';
import { ProductModule } from './product.module';

describe('ProductModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductModule).toBeDefined();
  });
});
