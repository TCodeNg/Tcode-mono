import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true})
  username:          string;

  @Prop({ required: true})
  password:                   string;

  @Prop({ required: true})
  email:             string;

  @Prop()
  createdAt?:         Date;
  @Prop()
  updatedAt?:         Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
  .index({ username: 1 }, { unique: true })
  .index({ email: 1 }, { unique: true });
