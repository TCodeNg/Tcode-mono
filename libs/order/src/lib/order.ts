import { Product } from '@tcode/api-interface';

interface IOrder {
  objectId: string
  products: { [key: string]: Product }
  gateway: Gateway
  createdAt: string
  updatedAt: string
}

export interface Gateway {
  paystack: {
    authorization_url: string
    access_code: string
    reference: string
  }
}

export class Order implements IOrder {
  createdAt: string;
  gateway: Gateway;
  objectId: string;
  products: { [key: string]: Product };
  updatedAt: string;

  get totalAmount(): number {
    return Object.values(this.products ?? {}).reduce((acc, curr) =>  acc + curr.price?.value, 0);
  }


  static generate(payload: IOrder): Order {
    const order = new Order;
    order.createdAt = payload.createdAt;
    order.gateway = payload.gateway;
    order.objectId = payload.objectId;
    order.products = payload.products;
    order.updatedAt = payload.updatedAt;
    return order;
  }
}
