import { FarmproduceComponent } from "./farmproduce.component"
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../services/cart.service';


describe('FarmproduceComponent', () => {
  let component: FarmproduceComponent;
  let fixture: ComponentFixture<FarmproduceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FarmproduceComponent],
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
    fixture = TestBed.createComponent(FarmproduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})