import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(
    private client: HttpClient,
    private firebaseAuth: AngularFireAuth, 
  ) {
  }

  refreshToken(token: string) {
    return this.client.post('http://localhost:3333/auth/refresh-token', { token });
  }

  async login(email: string, password: string) {
    // return this.client.post('https://tcode-storefront-api-stage.herokuapp.com/auth/login', { email, password });
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }


}
