import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: Error) {
    if (info) {
      if (info instanceof TokenExpiredError) {
        throw new HttpException(info.message, HttpStatus.UNAUTHORIZED);
      } else {
        console.log(info);
        throw info;
      }
    }
    return user;
  }
}
