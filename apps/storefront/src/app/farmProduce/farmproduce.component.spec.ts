import { FarmproduceComponent } from "./farmproduce.component"
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ProductModule } from '@tcode/product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('FarmproduceComponent', () => {
  let component: FarmproduceComponent;
  let fixture: ComponentFixture<FarmproduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FarmproduceComponent],
      imports: [
        InputModule,
        ButtonsModule,
        BrowserAnimationsModule,
        ProductModule
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