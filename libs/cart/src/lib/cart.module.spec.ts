import { async, TestBed } from '@angular/core/testing';
import { CartModule } from './cart.module';

describe('CartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CartModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CartModule).toBeDefined();
  });
});
