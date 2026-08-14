import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    const accessToken = this.extractTokenFromHeader(request);

    if (!accessToken) throw new UnauthorizedException('Token is not found');

    try {
      // Try to verify access token first
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const payload = await this.jwtService.verifyAsync(accessToken, {
        secret: process.env.JWT_SECRET,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      request['user'] = payload;
      return true;
    } catch {
      // If access token is expired, try to use refresh token
      const refreshToken = this.extractRefreshTokenFromCookie(request);

      if (!refreshToken) throw new UnauthorizedException('Expired token');

      try {
        // Verify refresh token
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const payload = await this.jwtService.verifyAsync(refreshToken, {
          secret: process.env.JWT_REFRESH_SECRET,
        });

        // Generate new access token
        const newAccessToken = await this.jwtService.signAsync(payload, {
          secret: process.env.JWT_SECRET,
          expiresIn: '15m',
        });

        // Set new access token in response header or cookie
        response.cookie('access_token', newAccessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        request['user'] = payload;
        return true;
      } catch {
        throw new UnauthorizedException('Invalid refresh token');
      }
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private extractRefreshTokenFromCookie(request: Request): string | undefined {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return request.cookies.refresh_token;
  }
}
