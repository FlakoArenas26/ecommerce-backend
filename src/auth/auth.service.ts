import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signin(authDto: AuthDto) {
    const admin = await this.validateCredentials(authDto);
    return this.generateToken(admin);
  }

  async generateToken(admin: AuthDto) {
    const payload = { login: admin.login };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateCredentials(authDto: AuthDto) {
    const login = process.env.ADMIN_LOGIN;
    const password = process.env.ADMIN_PASSWORD;
    if (login != authDto.login || password != authDto.password) {
      throw new UnauthorizedException({
        message: 'Incorrect login or password',
      });
    }

    return authDto;
  }
}
