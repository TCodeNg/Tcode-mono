import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, takeWhile } from 'rxjs/operators';
import { CheckoutService } from '../../services/checkout.service';
import { AUTH_SERVICE_TOKEN, AuthService } from '@tcode/frontend-auth';

@Component({
  selector: 'tcode-checkout-contact-information',
  templateUrl: './contactInformation.component.html',
  styleUrls: ['./contactInformation.component.scss']
})
export class CheckoutContactInformationComponent implements OnInit, OnDestroy {
  isAlive: boolean;
  authFormGroup: FormGroup;

  constructor(
    private router: Router,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService,
    private fb: FormBuilder,
    private checkoutService: CheckoutService
  ) {
    this.isAlive = true;
    this.authFormGroup = fb.group({
      phone: ['', Validators.required],
      email: ['', Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      shippingPhone: ['', Validators.required],
      shippingState: ['', Validators.required],
      shippingPostalCode: ['', Validators.required],
      shippingCountry: ['', Validators.required]
    });
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.authFormGroup.patchValue({
      email: this.authService.currentUser?.getEmail()
    });

    this.checkoutService.contactInfo$.pipe(
      takeWhile(() => this.isAlive),
      filter(res => res)
    ).subscribe((data) => {
      const { address, city, email, firstName, lastName, phone, shippingCountry, shippingPhone, shippingPostalCode, shippingState } = data;
      this.authFormGroup.patchValue({
        email, address, city, firstName, lastName, phone,
        shippingCountry, shippingPhone, shippingPostalCode, shippingState
      });
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  async submit() {
    this.checkoutService.contactInfo.next(this.authFormGroup.value);
    await this.router.navigate(['checkout', 'shipping-contact']);
  }
}
