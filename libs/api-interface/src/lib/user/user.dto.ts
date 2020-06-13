import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {

  @IsNotEmpty({
    message: 'Username is required'
  })
  readonly username: string;

  @MinLength(8, {
    message: 'Password length is too short. Password needs to be at least 8 characters long.'
  })
  readonly password: string;

  @IsNotEmpty({
    message: 'Email cannot be empty.'
  })
  @IsEmail()
  readonly email: string;

}
