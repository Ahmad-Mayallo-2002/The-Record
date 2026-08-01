import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Roles } from '../../enums/roles.enum';

export class CreateUserDto {
  @IsEmpty()
  @MinLength(5)
  @MaxLength(20)
  username!: string;

  @IsEmpty()
  @IsEmail()
  email!: string;

  @IsEmpty()
  password!: string;

  @IsEnum(Roles)
  role!: Roles;

  @IsOptional()
  image?: string;
}
