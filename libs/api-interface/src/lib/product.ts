import { Currency } from './currency';
import { Business } from './business';
import { Image } from './image';

export interface Product {
  agent: Business;
  bathrooms?: number;
  category: string[];
  created: Date;
  description: string;
  id: string;
  images: Image[];
  livingRooms?: number;
  owner?: Business;
  price: {
    value: number;
    currency: Currency;
  };
  rooms?: number;
  status: 'pending | published | out-of-stock';
  stock?: number;
  title: string;
  type: 'estate | farm | inverter';
  updated: Date;
}

export interface ProductResponse {
  page: number;
  total: number;
  products: Product[];
}
