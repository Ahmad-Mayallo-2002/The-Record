import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';

export type PostDocument = HydratedDocument<Post>;

@Schema({ collection: 'posts', timestamps: true })
export class Post {
  @Prop({ type: String, maxLength: 5000, required: true })
  content!: string;

  @Prop({ type: String })
  image!: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author!: User;

  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category!: Category;
}

export const PostSchema = SchemaFactory.createForClass(Post);
