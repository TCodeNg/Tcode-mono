import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { CART_SERVICE_TOKEN, CartService } from '@tcode/cart';
import { ORDER_SERVICE_TOKEN, OrderService } from '@tcode/order';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tcode-shipping-contact',
  templateUrl: './shippingContact.component.html',
  styleUrls: ['./shippingContact.component.scss']
})
export class ShippingContactComponent implements OnInit, OnDestroy {

  shippingInfoFormGroup: FormGroup;
  isAlive: boolean;
  contactInfo;
  lState: 'idle' | 'loading' = 'idle';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private checkoutService: CheckoutService,
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService,
    @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService,
    private _snackbar: MatSnackBar
  ) {
    this.isAlive = true;
    this.shippingInfoFormGroup = this.fb.group({
      paymentMethod: ['card', Validators.required],
      shippingMethod: ['standard', Validators.required]
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.isAlive = false;
  }

  async submit() {
    this.lState = 'loading';
    const { shippingMethod, paymentMethod } = this.shippingInfoFormGroup.value
    const payload = {
      shippingMethod: {
        type: shippingMethod
      },
      paymentMethod: {
        type: paymentMethod
      }
    }
    console.log(payload);
    try {
      // await this.cartService.checkout().toPromise();
      const orderId = await this.orderService.createOrder(payload).toPromise();
      await this.router.navigate(['/payment'], {queryParams: {orderId}});
    } catch (error) {
      this._snackbar.open(error, 'Ok')
    } finally {
      this.lState = 'idle';
    }
  }
}
