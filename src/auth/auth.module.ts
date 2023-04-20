import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
