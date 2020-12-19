import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './+state/auth.state';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { AUTH_CONFIG_TOKEN, AuthConfig } from './auth.config';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { User, USER_TYPE_TOKEN, userFactory } from './model';
import { AUTH_SERVICE_TOKEN } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ParseAuthService } from './parse.auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WINDOW_TOKEN } from './window-token';
import { UserTypeGuard } from './user-type.guard';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

@NgModule({
  imports: [
    ButtonsModule,
    CommonModule,
    HttpClientModule,
    InputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule.forChild([
      {
        path: 'auth/login',
        component: LoginComponent,
        canActivate: []
      },
      {
        path: 'auth/signup',
        component: RegisterComponent
      },
      {
        path: 'auth/reset',
        component: ResetPasswordComponent
      },
      {
        path: 'auth/403',
        component: UnauthorisedComponent
      },
      {
        path: 'auth',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AuthGuard
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, UnauthorisedComponent]
})
export class FrontendAuthModule {
  static forRoot(authConfig: AuthConfig, userType?: string): ModuleWithProviders<FrontendAuthModule> {
    return {
      ngModule: FrontendAuthModule,
      providers: [
        UserTypeGuard,
        {
          provide: AUTH_SERVICE_TOKEN,
          useClass: ParseAuthService,
          deps: [ WINDOW_TOKEN ]
        },
        {
          provide: WINDOW_TOKEN,
          useValue: window
        },
        {
          provide: USER_TYPE_TOKEN,
          useValue: userType
        },
        {
          provide: AUTH_CONFIG_TOKEN,
          useValue: authConfig
        },
        {
          provide: User,
          useFactory: userFactory,
          deps: [USER_TYPE_TOKEN, AUTH_SERVICE_TOKEN]
        }
      ]
    };
  }
}
