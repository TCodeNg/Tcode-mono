import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutContactInformationComponent } from './contactInformation.component';

describe('LandingComponent', () => {
  let component: CheckoutContactInformationComponent;
  let fixture: ComponentFixture<CheckoutContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutContactInformationComponent ],
      imports: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
