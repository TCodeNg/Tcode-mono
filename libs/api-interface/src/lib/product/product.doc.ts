import { Document } from 'mongoose';
import { ACL } from '../auth';
import { Schema } from '@nestjs/mongoose';

@Schema()
export class ProductDoc extends Document {
  acl?: ACL;
  title: string;
  price: number;
  currency: string; // Currency ID
  type: string;
  category: string;
  agent?: string; // Agent's ID
  rooms?: number; // Real estate
  bathrooms?: number; // Real estate
  livingRooms?: number; // Real estate
  description: string;
  images: string[]; // Array of image IDs,
  owner?: string; // Owner's ID. Farm produce
  status: string;
  created: Date;
  updated: Date;
  removed?: boolean;
  productId: string;
}
