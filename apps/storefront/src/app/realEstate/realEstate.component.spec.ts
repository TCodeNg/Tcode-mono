import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { RealEstateComponent } from './realEstate.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';

describe('RealEstateComponent', () => {
  let component: RealEstateComponent;
  let fixture: ComponentFixture<RealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateComponent],
      imports: [
        InputModule,
        ButtonsModule,
        ProductModule
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