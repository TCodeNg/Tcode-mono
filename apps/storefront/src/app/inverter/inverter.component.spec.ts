import { InverterComponent } from "./inverter.component";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../services/cart.service';

describe('InverterComponent', () => {
  let component: InverterComponent;
  let fixture: ComponentFixture<InverterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InverterComponent],
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
    fixture = TestBed.createComponent(InverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})