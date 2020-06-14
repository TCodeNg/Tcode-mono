import { Controller, Post, UseGuards, Request, Get, Body, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LocalAuthGuard } from '../local-auth.guard';
import { RefreshTokenDto, UserDto } from '@tcode/api-interface';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { from, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly logger: Logger) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('signUp')
  signUp(@Body() user: UserDto) {
    this.logger.log('Got here in controller');
    return from(this.authService.signUp(user)).pipe(
      tap(() => this.logger.log('Got here in observable')),
      catchError(err => {
        this.logger.error(err);
        return throwError(new HttpException(err, HttpStatus.BAD_REQUEST))
      })
    );
  }

  @Post('refresh-token')
  refreshToken(@Body() token: RefreshTokenDto) {
    return this.authService.refreshToken(token);
  }
}
