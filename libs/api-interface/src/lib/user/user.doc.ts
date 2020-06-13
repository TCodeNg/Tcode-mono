import { Document } from 'mongoose';
export class UserDoc extends Document {
  readonly username:          string;
  password:                   string;
  readonly email:             string;
  readonly createdAt:         Date;
  readonly updatedAt:         Date;
}
