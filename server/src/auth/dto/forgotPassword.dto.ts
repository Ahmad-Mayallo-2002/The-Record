import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class forgotPasswordDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string;
}
