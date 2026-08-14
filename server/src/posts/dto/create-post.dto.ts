import {
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(5000)
  @MinLength(1)
  content!: string;

  @IsNotEmpty()
  @IsString()
  image!: string;

  @IsNotEmpty()
  @IsUUID()
  author!: string;
}
