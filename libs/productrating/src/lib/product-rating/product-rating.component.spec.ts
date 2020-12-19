import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductRatingComponent } from './product-rating.component';

describe('ProductRatingComponent', () => {
  let component: ProductRatingComponent;
  let fixture: ComponentFixture<ProductRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
