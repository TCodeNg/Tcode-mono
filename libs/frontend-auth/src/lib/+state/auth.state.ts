import { Injectable } from '@angular/core';
import { AuthStateModel } from './auth.state.model';
import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { AuthService } from '../auth.service';
import { Login, LoginFailed } from './actions';

@StateRepository()
@Injectable()
@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState extends NgxsDataRepository<AuthStateModel> {

  constructor(private service: AuthService) {
    super();
  }

  @DataAction() async login(email: string, password: string) {
    const { dispatch, patchState } = this.ctx;
    await dispatch(new Login()).toPromise();
    try {
      const res: any = await this.service.login(email, password).toPromise();
      patchState({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken
      });
    } catch (err) {
      await dispatch(new LoginFailed(err.error)).toPromise();
    }
  }

  @DataAction() logOut() {
    const { patchState } = this.ctx;
    patchState({
      accessToken: undefined,
      refreshToken: undefined
    });
  }
}
