import { User } from './user';
import { AuthState } from '@tcode/frontend-auth';

export class Admin extends User {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly otherName: string;
  readonly phoneNumber: string;

  constructor(state: AuthState) {
    super(state);
  }
}
