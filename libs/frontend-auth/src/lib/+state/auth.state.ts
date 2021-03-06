import { Inject, Injectable } from '@angular/core';
import { AuthStateModel } from './auth.state.model';
import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { AUTH_SERVICE_TOKEN, AuthService } from '../auth.service';
import { Login, LoginFailed, LogoutFailed } from './actions';

@StateRepository()
@Injectable()
@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState extends NgxsDataRepository<AuthStateModel> {

  constructor(@Inject(AUTH_SERVICE_TOKEN) private service: AuthService) {
    super();
  }

  @DataAction() async login(email: string, password: string) {
    const { dispatch } = this.ctx;
    await dispatch(new Login()).toPromise();
    try {
      await this.service.login(email, password).toPromise();
    } catch (err) {
      await dispatch(new LoginFailed(err.error)).toPromise();
    }
  }

  @DataAction() async logOut() {
    const { dispatch } = this.ctx;
    try {
      await this.service.logout().toPromise();
    } catch (e) {
      await dispatch(new LogoutFailed(e));
    }
  }
}
