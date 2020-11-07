import { Injectable } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { BehaviorSubject, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'libs/frontend-auth/src/lib/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(
    private fireStore: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) {
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
    if (itemsInCart) {
      const existingProductInCart = itemsInCart.products[product.objectId];
      if (existingProductInCart) {
        localStorage.setItem('Mycart', JSON.stringify({
          products: {
            ...itemsInCart.products,
            [product.objectId]: {
              item: product,
              quantity: existingProductInCart.quantity += count,
              amount: existingProductInCart.amount += amount
            }
          }
        }));
        this.updateCartItemCount();
        this.updateCartTotalAmount();
        this.updateCartItems();
        this.uploadCartItems();
      } else {
        localStorage.setItem('Mycart', JSON.stringify({
          products: {
            ...itemsInCart.products,
            [product.objectId]: {
              item: product,
              quantity: count,
              amount
            }
          }
        }));
        this.updateCartItemCount();
        this.updateCartTotalAmount();
        this.updateCartItems();
        this.uploadCartItems();
      }
    } else {
      localStorage.setItem('Mycart', JSON.stringify({
        products: {
          [product.objectId]: {
            item: product,
            quantity: count,
            amount
          }
        }
      }));
      this.updateCartItemCount();
      this.updateCartTotalAmount();
      this.updateCartItems();
      this.uploadCartItems();
    }
  }

  removeItem(product: Product) {
    const cartItems = JSON.parse(localStorage.getItem('Mycart')).products;
    const p = cartItems[product.objectId]
    if (p) {
      delete cartItems[product.objectId];
      localStorage.setItem('Mycart', JSON.stringify({
        products: {
          ...cartItems
        }
      }));
    }
    this.updateCartItemCount();
    this.updateCartTotalAmount();
    this.updateCartItems();
    this.uploadCartItems();
  }

  getItemsInCart() {
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    return itemsInCart ? Object.values(itemsInCart.products) : [];
  }

  getCartItemCount(): number {
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    return itemsInCart ? Object.values(itemsInCart.products).length : 0;
  }

  getTotalCartAmount(): number {
    const itemsInCart = JSON.parse(localStorage.getItem('Mycart'));
    if (!itemsInCart) {
      return 0
    } else {
      const productsInCart = Object.values(itemsInCart.products);
      const totalAmount = productsInCart.reduce((acc, curr) => {
        return acc + curr['amount']
      }, 0);
      return +totalAmount;
    }
  }

  updateCartItemCount() {
    this.cartCount.next(this.getCartItemCount())
  }

  updateCartTotalAmount() {
    this.cartTotalAmount.next(this.getTotalCartAmount());
  }

  updateCartItems() {
    this.cartItems.next(this.getItemsInCart());
  }

  clearCart() {
    console.log('here mehn')
    localStorage.removeItem("Mycart");
    this.uploadCartItems();
    this.updateCartTotalAmount();
    this.updateCartItemCount();
  }

  async uploadCartItems() {
    const itemsInCart = this.getItemsInCart();
    const user = await this.firebaseAuth.currentUser;
    if (user.uid) {
      this.fireStore.collection('carts').doc(user.uid).collection('items').get().toPromise().then((doc) => {
        doc.forEach(el => {
          el.ref.delete();
        })
        itemsInCart.forEach(async (item) => {
          try {
            await this.fireStore.collection("carts").doc(user.uid).collection("items").doc(item["item"].id).set({
              price: item["item"].price.value,
              quantity: item["quantity"],
              description: item["item"].description
            })
          } catch (error) {
            console.log(error);
          }
        });
      })

    }
  }
}
