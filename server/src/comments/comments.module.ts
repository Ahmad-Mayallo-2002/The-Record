import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, commentSchema } from './entities/comment.entity';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Comment.name,
        schema: commentSchema,
      },
    ]),
  ],
})
export class CommentsModule {}
