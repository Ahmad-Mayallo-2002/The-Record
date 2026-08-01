import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from '../../users/entities/user.entity';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ collection: 'comments', timestamps: true })
export class Comment {
  @Prop({ type: String, required: true, maxLength: 5000, minLength: 1 })
  content!: string;

  @Prop({ type: Types.ObjectId, required: true })
  author!: User;
}

export const commentSchema = SchemaFactory.createForClass(Comment);
