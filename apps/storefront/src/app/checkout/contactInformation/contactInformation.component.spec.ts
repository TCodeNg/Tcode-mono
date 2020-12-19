import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CheckoutContactInformationComponent } from './contactInformation.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AUTH_SERVICE_TOKEN } from '@tcode/frontend-auth';

describe('LandingComponent', () => {
  let component: CheckoutContactInformationComponent;
  let fixture: ComponentFixture<CheckoutContactInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutContactInformationComponent ],
      imports: [
        InputModule,
        ButtonsModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: AUTH_SERVICE_TOKEN,
          useValue: {}
        }
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
