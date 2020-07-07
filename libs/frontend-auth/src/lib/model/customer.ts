import { User } from './user';
import { AuthState } from '../+state/auth.state';

export class Customer extends User {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly otherName: string;
  readonly phoneNumber: string;

  constructor(state: AuthState) {
    super(state);
  }

}
