import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { filter, takeWhile } from 'rxjs/operators';
import { CART_SERVICE_TOKEN, CartService } from '@tcode/cart';

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
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService
  ) {
    this.isAlive = true;
    this.shippingInfoFormGroup = this.fb.group({
      paymentMethod: ['card', Validators.required],
      standardShipping: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.checkoutService.shippingInfo$.pipe(
      filter(res => res),
      takeWhile(() => this.isAlive)
    ).subscribe((data) => {
      const { paymentMethod, standardShipping } = data;
      this.shippingInfoFormGroup.patchValue({
        paymentMethod, standardShipping
      });
    });
    this.checkoutService.contactInfo$.pipe(
      takeWhile(() => this.isAlive)
    ).subscribe((res) => {
      this.contactInfo = res;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  async submit() {
    if (!this.contactInfo) {
      await this.router.navigate(['checkout']);
    }
    this.lState = 'loading';

    try {
      await this.cartService.checkout().toPromise();
      await this.router.navigate(['/payment']);
    } catch (error) {
      console.log(error);
    } finally {
      this.lState = 'idle';
    }
  }
}
