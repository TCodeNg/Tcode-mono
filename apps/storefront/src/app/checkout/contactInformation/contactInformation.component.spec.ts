import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutContactInformationComponent } from './contactInformation.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'libs/frontend-auth/src/lib/auth.service';

describe('LandingComponent', () => {
  let component: CheckoutContactInformationComponent;
  let fixture: ComponentFixture<CheckoutContactInformationComponent>;

  beforeEach(async(() => {
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
          provide: AuthService,
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
