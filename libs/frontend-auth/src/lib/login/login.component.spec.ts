import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AUTH_CONFIG_TOKEN } from '../auth.config';
import { ButtonsModule } from '@tcode/buttons';
import { InputModule } from '@tcode/input';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ButtonsModule,
        InputModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: AUTH_CONFIG_TOKEN,
          useValue: {
            canResetPassword: true,
            canSignIn: true,
            canSignUp: true,
            appType: 'storefront'
          }
        }
      ]
    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
