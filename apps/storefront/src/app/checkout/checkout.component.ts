import { Component, Inject, OnInit } from "@angular/core";
import { Cart, CartService, CART_SERVICE_TOKEN } from '@tcode/cart';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'tcode-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    constructor(
        @Inject(CART_SERVICE_TOKEN) private cartService: CartService
    ) { }
    cart$: Observable<Cart> = this.cartService.getCart().pipe();
    cartItems$: Observable<any> = this.cart$.pipe(map(cart => Object.values(cart.products)), startWith([]));
    // cartAmount$ = this.cartService.cartTotalAmount$;
    cartAmount$ = this.cart$.pipe(map(cart => cart.totalAmount), startWith(0));

    ngOnInit(): void { }
}