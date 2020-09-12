import { Injectable } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {
  }

  private cartCount = new BehaviorSubject(0);
  public cartCount$ = this.cartCount.asObservable();

  private cartTotalAmount = new BehaviorSubject(0);
  public cartTotalAmount$ = this.cartTotalAmount.asObservable();

  private cartItems = new BehaviorSubject(null);
  public cartItems$ = this.cartItems.asObservable();

  addItem(product: Product, count: number) {
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    const amount: number = count * product.price.value;
    if(itemsInCart){
      const existingProductInCart = itemsInCart.products[product.id];
      if(existingProductInCart){
        localStorage.setItem('Mycart', JSON.stringify({
          products: {
            ...itemsInCart.products,
            [product.id]: {
              item: product,
              quantity: existingProductInCart.quantity += count,
              amount: existingProductInCart.amount += amount
            }
          }
        }));
        this.updateCartItemCount();
        this.updateCartTotalAmount();
        this.updateCartItems();
      } else {
        localStorage.setItem('Mycart', JSON.stringify({
          products: {
            ...itemsInCart.products,
            [product.id]: {
              item: product,
              quantity: count,
              amount
            }
          }
        }));
        this.updateCartItemCount();
        this.updateCartTotalAmount();
        this.updateCartItems();
      }
    } else {
      localStorage.setItem('Mycart', JSON.stringify({
        products: {
          [product.id]: {
            item: product,
            quantity: count,
            amount
          }
        }
      }));
      this.updateCartItemCount();
      this.updateCartTotalAmount();
      this.updateCartItems();
    }
  }

  removeItem(product: Product){
    const cartItems = JSON.parse(localStorage.getItem('Mycart')).products;
    console.log(cartItems)
    const p = cartItems[product.id]
    console.log(p)
    if(p){
      delete cartItems[product.id];
      localStorage.setItem('Mycart', JSON.stringify({
        products: {
          ...cartItems
        }
      }));
    }
    this.updateCartItemCount();
    this.updateCartTotalAmount();
    this.updateCartItems();
  }

  getItemsInCart(){
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    return itemsInCart ? Object.values(itemsInCart.products): [];
  }

  getCartItemCount(): number{
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    return itemsInCart ? Object.values(itemsInCart.products).length : 0;
  }

  getTotalCartAmount(): number {
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    if(!itemsInCart) {
      return 0
    }else {
      const productsInCart = Object.values(itemsInCart.products);
      const totalAmount = productsInCart.reduce((acc, curr) => {
        return acc + curr['amount']
      }, 0);
     return +totalAmount;
    }
  }

  updateCartItemCount(){
    this.cartCount.next(this.getCartItemCount())
  }

  updateCartTotalAmount(){
    this.cartTotalAmount.next(this.getTotalCartAmount());
  }

  updateCartItems(){
    this.cartItems.next(this.getItemsInCart());
  }
}