import { User } from './user';
import { AuthService } from '../auth.service';

export class Vendor extends User {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly otherName: string;
  readonly phoneNumber: string;

  constructor(state: AuthService) {
    super(state);
  }
}
