import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User, type UserDocument } from '../users/entities/user.entity';
import { Model } from 'mongoose';
import { registerDto } from './dto/register.dto';
import { compare, hash } from 'bcryptjs';
import { loginDto } from './dto/login.dto';
import { Payload } from '../types/payload.type';
import { createTransport } from 'nodemailer';
import { generate } from 'randomstring';
import { getEmailTemplate } from '../mjml/convertMJMLToHTML';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { resetPasswordDto } from './dto/resetPassword';
import { upload } from '../common/uploader';
import { Image } from '../types/image.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async register(input: registerDto): Promise<UserDocument> {
    const { username, email, password, confirmPassword, image } = input;
    const emailExist = await this.userModel.findOne({ email });
    if (emailExist) throw new ConflictException('This email is already exist');
    if (password !== confirmPassword)
      throw new BadRequestException('Passwords must be equals');

    const hashPassword = await hash(password, 10);

    const url_publicId: Image = {
      url: '',
      public_id: '',
    };

    if (image) {
      const { secure_url, public_id } = await upload(image);
      url_publicId.url = secure_url;
      url_publicId.public_id = public_id;
    }

    const newUser = await this.userModel.create({
      username,
      email,
      password: hashPassword,
      image: url_publicId,
    });

    return newUser;
  }

  async login(input: loginDto) {
    const { email, password } = input;

    const user = await this.userModel.findOne({ email });
    if (!user) throw new BadRequestException('Incorrect email or password');

    const matchPassword = await compare(password, user.password);
    if (!matchPassword)
      throw new BadRequestException('Incorrect email or password');

    const payload: Payload = {
      email,
      role: user.role,
      sub: user._id,
    };

    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    const refresh_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
    });

    return {
      access_token,
      refresh_token,
    };
  }

  async forgotPassword(email: string) {
    const code = await this.sendMail(email);
    await this.cacheManager.set(`${email}`, code, 1000 * 60 * 15);
    return email;
  }

  async verificationCode(code: string, email: string) {
    const cachedCode = await this.cacheManager.get(email);
    if (!cachedCode || cachedCode !== code)
      throw new BadRequestException('Invalid verification code');
    return true;
  }

  async resetPassword(input: resetPasswordDto, email: string) {
    const hashedPassword = await hash(input.password, 10);
    await this.userModel.updateOne(
      { email },
      {
        password: hashedPassword,
      },
    );
    return 'Password updated successfully';
  }

  private async sendMail(email: string): Promise<string> {
    const transport = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const code = generate({ length: 4, charset: 'numeric' });
    const html = await getEmailTemplate(code);
    await transport.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "This is your verification code don't share it with anyone",
      html,
    });
    return code;
  }
}
