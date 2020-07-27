import { Component, Inject, OnInit } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tcode-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpFormGroup: FormGroup;
  config: AuthConfig;

  constructor(@Inject(AUTH_CONFIG_TOKEN) config: AuthConfig, fb: FormBuilder) {
    this.config = config;
    this.signUpFormGroup = fb.group({});
  }

  ngOnInit(): void {
  }

}
