import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {

  @IsNotEmpty({
    message: 'Username is required'
  })
  username: string;

  @MinLength(8, {
    message: 'Password length is too short. Password needs to be at least 8 characters long.'
  })
  password: string;

  @IsNotEmpty({
    message: 'Email cannot be empty.'
  })
  @IsEmail()
  email: string;

  createdAt?: Date;
  updatedAt?: Date;

}
