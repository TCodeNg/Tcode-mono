import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CheckoutComponent } from './checkout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../services/cart.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [
          RouterTestingModule
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
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
