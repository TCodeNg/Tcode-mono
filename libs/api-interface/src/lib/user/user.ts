import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true})
  readonly username:          string;

  @Prop({ required: true})
  password:                   string;

  @Prop({ required: true})
  readonly email:             string;

  readonly createdAt:         Date;
  readonly updatedAt:         Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
