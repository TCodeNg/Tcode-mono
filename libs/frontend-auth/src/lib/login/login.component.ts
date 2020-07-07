import { Component, Inject, OnInit } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';

@Component({
  selector: 'tcode-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  config: AuthConfig;

  constructor(@Inject(AUTH_CONFIG_TOKEN) config: AuthConfig) {
    this.config = config;
  }

  ngOnInit(): void {
  }

}
