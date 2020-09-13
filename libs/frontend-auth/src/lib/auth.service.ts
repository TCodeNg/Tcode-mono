import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  authState = null;
  constructor(
    private client: HttpClient,
    private firebaseAuth: AngularFireAuth, 
  ) {
    firebaseAuth.authState.subscribe((auth) => {
      this.authState = auth;
    })
  }

  refreshToken(token: string) {
    return this.client.post('http://localhost:3333/auth/refresh-token', { token });
  }

  async login(email: string, password: string) {
    // return this.client.post('https://tcode-storefront-api-stage.herokuapp.com/auth/login', { email, password });
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return this.firebaseAuth.signOut();
  }

  isLoggedIn = this.firebaseAuth.authState && this.firebaseAuth.authState.pipe(
    map((res) => !!res)
  );

  get user(): Observable<firebase.User> {
    return this.firebaseAuth.user;
  }

}
