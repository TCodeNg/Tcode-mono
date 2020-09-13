import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'libs/frontend-auth/src/lib/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, tap, takeWhile } from 'rxjs/operators';
import { Validator } from 'class-validator';
import { CheckoutService } from '../../services/checkout.service';

@Component({
    selector: 'tcode-checkout-contact-information',
    templateUrl: './contactInformation.component.html',
    styleUrls: ['./contactInformation.component.scss']
})
export class CheckoutContactInformationComponent implements OnInit, OnDestroy {
    isAlive: boolean;
    constructor(
        private router: Router,
        private authService: AuthService,
        private fb: FormBuilder,
        private checkoutService: CheckoutService
    ){
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
            shippingCountry: ['', Validators.required],
        })
    }

    authFormGroup: FormGroup;

    ngOnInit(){
        this.authService.user && this.authService.user.pipe(
            takeWhile(() => this.isAlive),
            filter(res => !!res)
        ).subscribe((user) => {
            this.authFormGroup.patchValue({
                email: user.email
            })
        });

        this.checkoutService.contactInfo$.pipe(
            takeWhile(() => this.isAlive),
            filter(res => res)
        ).subscribe((data) => {
            const { address, city, email, firstName, lastName, phone, shippingCountry, shippingPhone, shippingPostalCode, shippingState } = data;
            this.authFormGroup.patchValue({
                email, address, city, firstName, lastName, phone,
                shippingCountry, shippingPhone, shippingPostalCode, shippingState
            })
        })
    }

    ngOnDestroy() {
        this.isAlive = false;
    }

    submit() {
        this.checkoutService.contactInfo.next(this.authFormGroup.value);
        this.router.navigate(['checkout', 'shipping-contact']);
    }

    get isLoggedIn() {
        return this.authService.isLoggedIn;
    }
}