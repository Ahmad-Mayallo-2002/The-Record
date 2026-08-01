import { PartialType } from '@nestjs/mapped-types';
import { CreateLikesDislikeDto } from './create-likes-dislike.dto';

export class UpdateLikesDislikeDto extends PartialType(CreateLikesDislikeDto) {}
