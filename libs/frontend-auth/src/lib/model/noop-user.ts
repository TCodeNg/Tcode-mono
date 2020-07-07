import { User } from './user';

export class NoopUser extends User {
  email: string;
  firstName: string;
  lastName: string;
  otherName: string;
  phoneNumber: string;

  isLoggedIn(): boolean {
    return false;
  }

  logOut(): void {
  }

}
