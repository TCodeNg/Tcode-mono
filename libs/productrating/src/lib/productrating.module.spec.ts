import { async, TestBed } from '@angular/core/testing';
import { ProductratingModule } from './productrating.module';

describe('ProductratingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProductratingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProductratingModule).toBeDefined();
  });
});
