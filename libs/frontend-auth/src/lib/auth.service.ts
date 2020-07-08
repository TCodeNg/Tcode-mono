import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private client: HttpClient) {
  }

  refreshToken(token: string) {
    return this.client.post('http://localhost:3333/auth/refresh-token', { token });
  }

  login(email: string, password: string) {
    return this.client.post('https://tcode-storefront-api-stage.herokuapp.com/auth/login', { email, password });
  }
}
