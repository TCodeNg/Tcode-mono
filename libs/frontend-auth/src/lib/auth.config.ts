import { InjectionToken } from '@angular/core';

export interface AuthConfig {
  appTitle?: string;
  canResetPassword: boolean;
  canSignIn: boolean;
  returnUrl?: string[] | string;
  canSignUp: boolean;
  appType: 'storefront' | 'vendor' | 'admin';
}

export const AUTH_CONFIG_TOKEN = new InjectionToken<AuthConfig>('AUTH_CONFIG_TOKEN');
