import {
  IsEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCommentDto {
  @IsEmpty()
  @IsString()
  @MaxLength(5000)
  @MinLength(1)
  content!: string;

  @IsEmpty()
  @IsUUID()
  author!: string;
}
