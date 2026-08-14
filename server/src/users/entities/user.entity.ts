import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Roles } from '../../enums/roles.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop({ type: String, required: true, minLength: 5, maxLength: 20 })
  username!: string;

  @Prop({ type: String, required: true, unique: true })
  email!: string;

  @Prop({ type: String, required: true })
  password!: string;

  @Prop({ type: String, enum: Roles, default: Roles.USER })
  role!: Roles;

  @Prop({ type: String })
  image!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
