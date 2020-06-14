import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RefreshTokenDto, UserDto, UserModel } from '@tcode/api-interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: UserModel = await this.usersService.findOne(username, true).toPromise();
    if (!user) {
      return null;
    }
    const isPassword = await bcrypt.compare(pass, user.password);
    if (user && isPassword) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserModel) {
    const payload = { username: user.username, sub: user.id };
    const tokens = {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: process.env.JWT_TTL || 60 * 60 * 30
      }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: 60 * 60 * 24 * 30,
      }),
    };

    await this.usersService.saveRefreshToken({ token: tokens.refreshToken });

    return tokens;
  }

  async refreshToken(refreshToken: RefreshTokenDto) {
    const _token = await this.usersService.getRefreshToken(refreshToken);

    if (!_token) {
      throw new HttpException('Invalid refresh token.', HttpStatus.UNAUTHORIZED);
    }

    const tokenPayload = this.jwtService.decode(_token.token);

    const expiry = +tokenPayload['exp'];
    const now = Date.now() / 1000;

    if (now >= expiry) {
      throw new HttpException('Invalid refresh token. Your refresh token has expired.', HttpStatus.UNAUTHORIZED);
    }

    const user: UserModel = await this.usersService.findOne(tokenPayload['username']).toPromise();
    const payload = { username: user.username, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: _token.token
    };

  }

  async signUp(user: UserDto) {
    const password = bcrypt.hashSync(user.password, 10);
    const _user: UserDto = {
      ...user,
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return await this.usersService.create(_user).toPromise();
  }
}
