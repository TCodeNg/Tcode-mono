import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose";
import { Document } from 'mongoose';

@Schema({
  autoCreate: true
})
export class Rating extends Document {
  @Prop({
    required: true
  })
  user: string;

  @Prop({
    required: true
  })
  score: number;

  @Prop({
    required: true
  })
  className: string;

  @Prop({
    required: true
  })
  entityId: string;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
