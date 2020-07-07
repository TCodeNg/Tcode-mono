import { IUser } from './iuser';
import { AuthState } from '../+state/auth.state';
import { AuthStateModel } from '../+state/auth.state.model';

export abstract class User implements IUser {
  abstract email: string;
  abstract firstName: string;
  abstract lastName: string;
  abstract otherName: string;
  abstract phoneNumber: string;
  private snapshot: AuthStateModel;

  constructor(private state: AuthState) {
    const { snapshot } = state;
    this.snapshot = snapshot;
  }

  isLoggedIn(): boolean {
    return !!this.snapshot.accessToken;
  }


  logOut() {
    this.state.logOut();
  }
}
