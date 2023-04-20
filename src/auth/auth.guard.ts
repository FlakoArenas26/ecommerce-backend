import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if (bearer !== 'Bearer' || !token)
          throw new UnauthorizedException({
            message: 'Access is denied due to invalid credentials error',
          });

        const admin = this.jwtService.verify(token);
        req.admin = admin;
        return true;
      }
      throw new UnauthorizedException({
        message: 'Access is denied due to invalid credentials error',
      });
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Access is denied due to invalid credentials error',
      });
    }
  }
}
