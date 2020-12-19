import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from './productDetail.component';
import { SharedModule } from '../shared.module';
import { CartService } from '../../services/cart.service';


describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        SharedModule
      ],
      providers: [
        {
          provide: CartService,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
