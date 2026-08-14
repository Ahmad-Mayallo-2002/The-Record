import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
import { resetPasswordDto } from './dto/resetPassword';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() input: registerDto) {
    return await this.authService.register(input);
  }

  @Post('login')
  async login(@Body() input: loginDto, @Res() res: Response) {
    const { access_token, refresh_token } = await this.authService.login(input);
    res
      .cookie('access_token', access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      .cookie('refresh_token', refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      .json({ msg: 'login successfully' });
  }

  @Post('forgot-password')
  async forgotPassword(@Body() email: string, @Res() res: Response) {
    await this.authService.forgotPassword(email);
    res
      .cookie(email, email, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      .json({ msg: 'Verification code sent successfully' });
  }

  @Post('verification-code')
  async verificationCode(@Body() code: string, @Req() req: Request) {
    const email = req.cookies?.email as string;
    return await this.authService.verificationCode(code, email);
  }

  @Post('reset-password')
  async resetPassword(
    @Body() input: resetPasswordDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const email = req.cookies?.email as string;
    const result = await this.authService.resetPassword(input, email);
    res.clearCookie(email).json({ msg: result });
  }
}
