import { Module } from '@nestjs/common';
import { LikesDislikesService } from './likes-dislikes.service';
import { LikesDislikesController } from './likes-dislikes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LikesDislike,
  likesDislikeSchema,
} from './entities/likes-dislike.entity';

@Module({
  controllers: [LikesDislikesController],
  providers: [LikesDislikesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: LikesDislike.name,
        schema: likesDislikeSchema,
      },
    ]),
  ],
})
export class LikesDislikesModule {}
