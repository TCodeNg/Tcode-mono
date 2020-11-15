import { async, TestBed } from '@angular/core/testing';
import { OrderDetailUiModule } from './order-detail-ui.module';

describe('OrderDetailUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderDetailUiModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderDetailUiModule).toBeDefined();
  });
});
