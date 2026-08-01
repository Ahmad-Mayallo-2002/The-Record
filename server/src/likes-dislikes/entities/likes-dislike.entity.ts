import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

export type LikesDislikeDocument = HydratedDocument<LikesDislike>;

@Schema({ collection: 'likesDislike', timestamps: true })
export class LikesDislike {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author!: User;

  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  post!: Post;

  @Prop({ type: Boolean, required: true })
  value!: boolean;
}

export const likesDislikeSchema = SchemaFactory.createForClass(LikesDislike);
