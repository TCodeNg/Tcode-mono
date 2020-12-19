import { TestBed, waitForAsync } from '@angular/core/testing';
import { OrderDetailUiModule } from './order-detail-ui.module';

describe('OrderDetailUiModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OrderDetailUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderDetailUiModule).toBeDefined();
  });
});
