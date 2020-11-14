import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from './validator';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AUTH_SERVICE_TOKEN, AuthService } from '../auth.service';

@Component({
  selector: 'tcode-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  signUpFormGroup: FormGroup;
  config: AuthConfig;
  isAlive: boolean;
  isLoading = new BehaviorSubject(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(
    @Inject(AUTH_CONFIG_TOKEN) config: AuthConfig,
    fb: FormBuilder,
    private router: Router,
    public _snackBar: MatSnackBar,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService
    ) {
    this.config = config;
    this.isAlive = true;
    this.signUpFormGroup = fb.group({
      username: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: validatePassword });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  get isPasswordMatchError(): boolean {
    return (
      this.signUpFormGroup.controls.confirmPassword.touched &&
      this.signUpFormGroup.controls.password.dirty &&
      this.signUpFormGroup.hasError('passwordMatch')
    );
  }

  async submit() {
    this.isLoading.next(true);
    const { email, password, username, phoneNumber, lastName, firstName, address } = this.signUpFormGroup.value;
    const payload = {
      email,
      username,
      phoneNumber,
      lastName,
      firstName,
      address,
      password
    }

    try {
      await this.authService.signUp(payload).toPromise();
    } catch (error) {
      this._snackBar.open(error.message, null, {
        duration: 2000
      })
    } finally {
      this.isLoading.next(false);
    }
  }

}
