import { Document } from 'mongoose';
export class RefreshTokenDoc extends Document {
  readonly token: string;
}
