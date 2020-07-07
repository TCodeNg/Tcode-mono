import { Component, Inject, OnInit } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';

@Component({
  selector: 'tcode-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  config: AuthConfig;

  constructor(@Inject(AUTH_CONFIG_TOKEN) config: AuthConfig) {
    this.config = config;
  }

  ngOnInit(): void {
  }

}
