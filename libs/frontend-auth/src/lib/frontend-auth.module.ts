import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
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
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    ButtonsModule,
    CommonModule,
    HttpClientModule,
    InputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule.forChild([
      {
        path: 'auth/login',
        component: LoginComponent
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
        path: 'auth',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent]
})
export class FrontendAuthModule {
  static forRoot(authConfig: AuthConfig, userType?: string): ModuleWithProviders {
    return {
      ngModule: FrontendAuthModule,
      providers: [
        AuthService,
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
          deps: [USER_TYPE_TOKEN, AuthState]
        }
      ]
    };
  }
}
