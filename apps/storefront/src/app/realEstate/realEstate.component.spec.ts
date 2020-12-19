import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RealEstateComponent } from './realEstate.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../services/cart.service';

describe('RealEstateComponent', () => {
  let component: RealEstateComponent;
  let fixture: ComponentFixture<RealEstateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateComponent],
      imports: [
        InputModule,
        ButtonsModule,
        BrowserAnimationsModule,
        ProductModule,
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
    fixture = TestBed.createComponent(RealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})