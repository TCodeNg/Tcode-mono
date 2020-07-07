import { Injectable } from '@angular/core';
import { AuthStateModel } from './auth.state.model';
import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';

@StateRepository()
@Injectable()
@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState extends NgxsDataRepository<AuthStateModel> {

  @DataAction() login(email: string, password: string) {

  }

  @DataAction() logOut() {
    const { patchState } = this.ctx;
    patchState({
      accessToken: undefined,
      refreshToken: undefined
    });
  }
}
