import { Component, Inject, OnInit } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';

@Component({
  selector: 'tcode-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  config: AuthConfig;

  constructor(@Inject(AUTH_CONFIG_TOKEN) config: AuthConfig) {
    this.config = config;
  }

  ngOnInit(): void {
  }

}
