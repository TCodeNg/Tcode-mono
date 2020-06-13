import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LocalAuthGuard } from '../local-auth.guard';
import { RefreshTokenDto, UserDto } from '@tcode/api-interface';
import { JwtAuthGuard } from '../jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

  @Post('sign-up')
  signUp(@Body() user: UserDto) {
    return this.authService.signUp(user);
  }

  @Post('refresh-token')
  refreshToken(@Body() token: RefreshTokenDto) {
    return this.authService.refreshToken(token);
  }
}
