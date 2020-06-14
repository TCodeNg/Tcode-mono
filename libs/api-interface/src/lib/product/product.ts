import { Business } from '../business';
import { IImage } from '../image';
import { ProductRating } from './product-rating';

export interface Product {
  agent: Business;
  bathrooms?: number;
  category: string[];
  created: Date;
  description: string;
  id: string;
  images: IImage[];
  livingRooms?: number;
  owner?: Business;
  price: {
    value: number;
    currency: string;
  };
  rooms?: number;
  status: 'pending' | 'published' | 'out-of-stock';
  stock?: number;
  title: string;
  type: 'estate' | 'farm' | 'inverter';
  updated: Date;
  rating?: ProductRating;
}

export interface ProductResponse {
  page: number;
  total: number;
  products: Product[];
}
