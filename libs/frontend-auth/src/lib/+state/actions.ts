export class Login {
  static readonly type = '[AUTH] Login';
  constructor(public payload: {email: string; password: string}) {}
}

export class LoginSuccessful {
  static readonly type = '[AUTH] LoginSuccessful';
  constructor(public payload: {accessToken: string; refreshToken: string}) {}
}

export class LoginFailed {
  static readonly type = '[AUTH] LoginFailed';
  constructor(public payload: Error) {}
}

export class RefreshToken {
  static readonly type = '[AUTH] RefreshToken';
  constructor(public refreshToken: string) {}
}

export class RefreshTokenSuccessful {
  static readonly type = '[AUTH] RefreshTokenSuccessful';
  constructor(public payload: {accessToken: string; refreshToken: string}) {}
}
