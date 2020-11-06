import { Observable } from 'rxjs';

export interface IUser {
    firstName: string;
    lastName: string;
    otherName?: string;
    phoneNumber?: string;
    email: string;
    isLoggedIn(): Observable<boolean>;
    logOut(): Observable<any>;
}
