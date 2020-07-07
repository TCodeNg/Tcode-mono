export interface IUser {
    firstName: string;
    lastName: string;
    otherName?: string;
    phoneNumber?: string;
    email: string;
    isLoggedIn(): boolean;
    logOut(): void;
}
