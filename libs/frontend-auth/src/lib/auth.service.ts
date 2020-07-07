import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private client: HttpClient) {
  }

  refreshToken(token: string) {
    return this.client.post('http://localhost:3333/auth/refresh-token', { token });
  }
}
