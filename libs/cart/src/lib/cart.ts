import * as Parse from 'parse';
import { Product } from '@tcode/api-interface';

const CART = 'Cart';

export interface CartInterface {
  products: {
    [key: string]: {
      item: Product;
      quantity: number;
      amount: number;
    }
  };
  totalAmount: number;
  itemCount: number;
}

export type Cart = CartInterface;

export class ParseCart extends Parse.Object implements CartInterface {
  constructor() {
    super(CART);
  }
  get products() {
    return this.get('products');
  }
  get totalAmount() {
    const products = this.products;
    return Object.keys(products).reduce((acc, key) => {
      return acc + products[key].amount;
    }, 0);
  }
  get itemCount() {
    return Object.keys(this.products).length;
  }
}

