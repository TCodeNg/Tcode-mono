import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
     providedIn: "root"
})
export class CheckoutService {
     constructor(){}
     public contactInfo = new BehaviorSubject(null);
     public contactInfo$ = this.contactInfo.asObservable();

     public shippingInfo = new BehaviorSubject(null);
     public shippingInfo$ = this.shippingInfo.asObservable();
}