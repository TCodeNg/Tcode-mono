import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingProductComponent } from './landingProduct.component';
import { SharedModule } from '../../Shared/shared.module';
import { CartService } from '../../services/cart.service';

describe('LandingProductComponent', () => {
  let component: LandingProductComponent;
  let fixture: ComponentFixture<LandingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingProductComponent ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(LandingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
