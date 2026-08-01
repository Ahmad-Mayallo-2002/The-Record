import {
  IsEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
  @IsEmpty()
  @IsString()
  @MaxLength(5000)
  @MinLength(1)
  content!: string;

  @IsEmpty()
  @IsString()
  image!: string;

  @IsEmpty()
  @IsUUID()
  author!: string;
}
