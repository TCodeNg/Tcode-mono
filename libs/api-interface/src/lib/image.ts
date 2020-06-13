import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface IImage {
  image: string;
  thumb: string;
}

@Schema({ autoCreate: true})
export class Image extends Document {
  @Prop({ required: true})
  image: string;
  @Prop({ required: true})
  thumb: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
