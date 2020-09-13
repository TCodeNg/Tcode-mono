import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../Shared/shared.module';
import { RealEstateProductComponent } from './realEstateProduct.component';
import { CartService } from '../../services/cart.service';

describe('RealEstateProductComponent', () => {
  let component: RealEstateProductComponent;
  let fixture: ComponentFixture<RealEstateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateProductComponent ],
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
    fixture = TestBed.createComponent(RealEstateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
