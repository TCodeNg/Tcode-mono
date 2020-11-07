import { Inject, Injectable } from '@angular/core';
import { AuthStateModel } from './auth.state.model';
import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Login, LoginFailed, LogoutFailed, SignUpFailed, SignUp } from './actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { AUTH_SERVICE_TOKEN, AuthService } from '../auth.service';

@StateRepository()
@Injectable()
@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState extends NgxsDataRepository<AuthStateModel> {

  constructor(@Inject(AUTH_SERVICE_TOKEN) private service: AuthService, private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore) {
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

  @DataAction() async signUp(payload) {
    const { dispatch, patchState } = this.ctx;
    await dispatch(new SignUp()).toPromise();
    const { email, password } = payload;
    try {
      const newUser = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      try {
        const userId = newUser.user.uid;
        console.log(userId);
        const user = await this.firestore.collection("profiles").doc(userId).set(payload);
        console.log(user)
      } catch (error) {
        await dispatch(new SignUpFailed(error)).toPromise();
      }
    } catch (error) {
      console.log(error)
      await dispatch(new SignUpFailed(error)).toPromise();
    }
  }
}
