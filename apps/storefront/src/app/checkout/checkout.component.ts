import { Component, OnInit } from "@angular/core";
import { CartService } from '../services/cart.service';

@Component({
    selector: 'tcode-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    constructor(
        private cartService: CartService
    ){}

    cartItems$ = this.cartService.cartItems$
    cartAmount$ = this.cartService.cartTotalAmount$;
    
    ngOnInit(): void {
        this.cartService.updateCartItems()
    }
}