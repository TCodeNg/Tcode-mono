import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface ICurrency {
  id: string;
  iso: string;
}

@Schema({
  autoCreate: true
})
export class Currency extends Document {
  @Prop()
  id: string;
  @Prop({ required: true})
  iso: string;
  @Prop({ required: true})
  name: string;
  @Prop({ required: true})
  longName: string;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
