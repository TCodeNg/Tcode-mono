import { TestBed, waitForAsync } from '@angular/core/testing';
import { OrderModule } from './order.module';

describe('OrderModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OrderModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderModule).toBeDefined();
  });
});
