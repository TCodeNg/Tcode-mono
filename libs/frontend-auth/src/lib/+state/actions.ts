export class Login {
  type = '[AUTH] Login';
}

export class LoginSuccessful {
  type = '[AUTH] LoginSuccessful';
}

export class LoginFailed {
  type = '[AUTH] LoginFailed';
  constructor(public error: Error) { }
}

export class LogoutFailed {
  type = '[AUTH] LogoutFailed';
  constructor(public error: Error) { }
}
