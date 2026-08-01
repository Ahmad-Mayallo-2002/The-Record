import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ collection: 'categories', timestamps: true })
export class Category {
  @Prop({ type: String, required: true })
  name!: string;
}

export const categorySchema = SchemaFactory.createForClass(Category);
