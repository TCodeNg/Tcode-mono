import { AuthState } from '../+state/auth.state';
import { User } from './user';

export class Vendor extends User {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly otherName: string;
  readonly phoneNumber: string;

  constructor(state: AuthState) {
    super(state);
  }
}
