import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class registerDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  username!: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string;

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

  @IsOptional()
  image?: Express.Multer.File;
}
