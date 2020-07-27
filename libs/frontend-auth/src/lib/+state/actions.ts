export class Login {
  type = '[AUTH] Login';
}

export class LoginSuccessful {
  type = '[AUTH] LoginSuccessful';
}

export class LoginFailed {
  type = '[AUTH] LoginFailed';
  constructor(public error: Error) {}
}

export class RefreshToken {
  static readonly type = '[AUTH] RefreshToken';
  constructor(public refreshToken: string) {}
}

export class RefreshTokenSuccessful {
  static readonly type = '[AUTH] RefreshTokenSuccessful';
  constructor(public payload: {accessToken: string; refreshToken: string}) {}
}

