import { TestBed, waitForAsync } from '@angular/core/testing';
import { ProductratingModule } from './productrating.module';

describe('ProductratingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductratingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductratingModule).toBeDefined();
  });
});
