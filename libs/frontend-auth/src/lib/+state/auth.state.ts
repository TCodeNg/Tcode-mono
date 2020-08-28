import { Injectable } from '@angular/core';
import { AuthStateModel } from './auth.state.model';
import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { AuthService } from '../auth.service';
import { Login, LoginFailed, SignUpFailed, SignUp } from './actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

@StateRepository()
@Injectable()
@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState extends NgxsDataRepository<AuthStateModel> {

  constructor(private service: AuthService, private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore ) {
    super();
  }

  // @DataAction() async login(email: string, password: string) {
  //   const { dispatch, patchState } = this.ctx;
  //   await dispatch(new Login()).toPromise();
  //   try {
  //     const res: any = await this.service.login(email, password).toPromise();
  //     patchState({
  //       accessToken: res.accessToken,
  //       refreshToken: res.refreshToken
  //     });
  //   } catch (err) {
  //     await dispatch(new LoginFailed(err.error)).toPromise();
  //   }
  // }

  @DataAction() logOut() {
    const { patchState } = this.ctx;
    patchState({
      accessToken: undefined,
      refreshToken: undefined
    });
  }

  @DataAction() async signUp(payload) {
    const { dispatch, patchState } = this.ctx;
    await dispatch(new SignUp()).toPromise();
    const {email, password} = payload;
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
