import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from "mongoose";

@Schema({
  autoCreate: true
})
export class Rating {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
