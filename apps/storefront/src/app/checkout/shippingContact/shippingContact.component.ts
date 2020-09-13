import { OnInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { tap, takeWhile, filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from '../../services/cart.service';

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
        private firebaseAuth: AngularFireAuth,
        private fireStore: AngularFirestore,
        private cartService: CartService
    ){
        this.isAlive = true;
        this.shippingInfoFormGroup = this.fb.group({
            paymentMethod: ['card', Validators.required],
            standardShipping: [false, Validators.required]
        })
    }

    ngOnInit(): void {
        this.checkoutService.shippingInfo$.pipe(
            filter(res => res),
            takeWhile(() => this.isAlive)
        ).subscribe((data) => {
            const { paymentMethod, standardShipping } = data;
            this.shippingInfoFormGroup.patchValue({
                paymentMethod, standardShipping
            })
        })
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
        if(!this.contactInfo){
            this.router.navigate(['checkout']);
        }
        this.lState = 'loading'
        this.checkoutService.shippingInfo.next(this.shippingInfoFormGroup.value);
        const user = await this.firebaseAuth.currentUser;
        if(user) {
            const id = this.fireStore.createId()
            this.fireStore.collection('carts').doc(user.uid).collection('items').valueChanges().pipe(
                takeWhile(() => this.isAlive),
                tap((cartItems) => {
                    this.fireStore.collection('order').doc(id).set({
                        userId: user.uid,
                        items: cartItems,
                        contactInfo: {...this.contactInfo},
                        shippingInfo: {...this.shippingInfoFormGroup.value}
                    })
                })
            ).subscribe(() => {
                this.lState = 'idle';
                this.cartService.clearCart();
                this.router.navigate(['/payment']);
            })
        }
    }
}