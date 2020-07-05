import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface IImage {
  image: string;
  thumb: string;
  public_Id: string;
  width: number;
  height: number;
}

@Schema({ autoCreate: true})
export class Image extends Document {
  @Prop({ required: true})
  image: string;
  @Prop({ required: true})
  thumb: string;
  @Prop({ required: true})
  public_id: string;
  @Prop()
  width: number;
  @Prop()
  height: number;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
