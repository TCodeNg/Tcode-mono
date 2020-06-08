export class ProductDto {
  title: string;
  price: number;
  currency: string; // Currency ID
  type: 'estate | farm | inverter';
  category: string;
  agent?: string; // Agent's ID
  rooms?: number; // Real estate
  bathrooms?: number; // Real estate
  livingRooms?: number; // Real estate
  description: string;
  images: string[]; // Array of image IDs,
  owner?: string; // Owner's ID. Farm produce
  status: 'pending | published | out-of-stock';
  created: Date;
  updated: Date;
}
