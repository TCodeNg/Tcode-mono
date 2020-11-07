import { Component, Inject, OnInit } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../+state/auth.state';
import { Actions } from '@ngxs/store';
import { Observable } from 'rxjs';
import { distinctUntilKeyChanged, filter, map, pluck, startWith, tap } from 'rxjs/operators';
import { API_ERROR } from '@tcode/shared/assets';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AUTH_SERVICE_TOKEN, AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CART_SERVICE_TOKEN, CartService } from '@tcode/cart';

@Component({
  selector: 'tcode-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  config: AuthConfig;
  loginFormGroup: FormGroup;

  lState: 'idle' | 'loading' = 'idle';

  get isValid(): boolean {
    return this.loginFormGroup ? !this.loginFormGroup.valid : true;
  }

  get loginState(): Observable<'idle' | 'loading'> {
    return this.actions.pipe(
      pluck('action'),
      filter(action => !!action.type),
      distinctUntilKeyChanged('type'),
      tap(action => this.handleLoginAction(action)),
      map(action => action.type === '[AUTH] Login' ? 'loading' : 'idle'),
      startWith('idle'),
    ) as Observable<'idle' | 'loading'>;
  }

  constructor(
    @Inject(AUTH_CONFIG_TOKEN) config: AuthConfig,
    fb: FormBuilder,
    private state: AuthState,
    private actions: Actions,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService,
    public _snackBar: MatSnackBar,
    public router: Router,
    @Inject(CART_SERVICE_TOKEN)private cartService: CartService
  ) {
    this.config = config;
    this.loginFormGroup = fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginState.subscribe(
      state => this.lState = state
    )
  }

  async onSubmit() {
    const { email, password } = this.loginFormGroup.value;
    this.lState = 'loading';
    this.authService.login(email, password).toPromise().then((_) => {
      this.lState = 'idle'
      this.router.navigate(["/"]);
    }).catch((error: Parse.Error) => {
      this.lState = 'idle'
      this._snackBar.open(error.message, null, {
        duration: 5000
      });
    })
  }

  private handleLoginAction(action: any) {
    if(!!action.error) {
      const error = API_ERROR[action.error.statusCode];
      const { _snackBar } = this;
      _snackBar.open(error, null, {
        duration: 2000,
      });
    }
  }
}
