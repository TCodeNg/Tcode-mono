import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RefreshTokenDoc, RefreshTokenDto, User, UserDto, UserModel } from '@tcode/api-interface';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('RefreshToken') private readonly refreshModel: Model<RefreshTokenDoc>
  ) {
  }

  findOne(username: string, showPassword = false, showId = true): Observable<UserModel> {
    return from(this.userModel.findOne({ username }).exec()).pipe(
      map((user: User) => UserService.toUser(user, showPassword, showId)),
    );
  }

  create(user: UserDto): Observable<UserModel> {
    return from(this.userModel.create(user)).pipe(
      map((user: User) => UserService.toUser(user, false, false)),
      catchError(err => {
        new Logger().error(err);
        const errorMessages = {
          username: 'Username is taken',
          email: 'Email is taken',
        };
        const key = err.errmsg.includes('username') ? 'username' : 'email';
        return err.errmsg.includes('username') || err.errmsg.includes('email') ?
          throwError(new HttpException(errorMessages[key], HttpStatus.BAD_REQUEST)) :
          throwError(err);
      }),
    );
  }

  async saveRefreshToken(refreshToken: RefreshTokenDto) {
    return this.refreshModel.create(refreshToken);
  }

  async getRefreshToken(token: RefreshTokenDto) {
    return this.refreshModel.findOne(token).exec();
  }

  private static toUser(user: User, showPassword = false, showId = false): UserModel {
    if (!user) return null;
    return {
      id: showId ? user._id : undefined,
      username: user.username,
      email: user.email,
      password: showPassword ? user.password : undefined,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
