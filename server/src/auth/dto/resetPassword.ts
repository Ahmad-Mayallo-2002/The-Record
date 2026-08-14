import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class resetPasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  password!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  confirmPassword!: string;
}
