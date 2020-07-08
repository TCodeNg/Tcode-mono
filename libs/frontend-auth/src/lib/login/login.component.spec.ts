import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AUTH_CONFIG_TOKEN } from '../auth.config';
import { ButtonsModule } from '@tcode/buttons';
import { InputModule } from '@tcode/input';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { AuthState } from '../+state/auth.state';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { hot } from 'jest-marbles';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ButtonsModule,
        InputModule,
        RouterTestingModule,
        NgxsModule.forRoot([AuthState]),
        NgxsDataPluginModule.forRoot(),
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {}
        },
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
