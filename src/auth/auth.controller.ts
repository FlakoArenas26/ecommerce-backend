import { AuthService } from './auth.service';
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/')
  signin(@Body() authDto: AuthDto) {
    return this.authService.signin(authDto);
  }
}
