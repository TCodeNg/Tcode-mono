import { Component, Inject, InjectionToken, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
import { from } from 'rxjs';
import { filter, pluck, switchMap, tap } from 'rxjs/operators';

const WINDOW_TOKEN = new InjectionToken<Window>('WINDOW_TOKEN');
@Component({
     selector: 'tcode-payment',
     templateUrl: './payment.component.html',
     styleUrls: ['./payment.component.scss'],
     providers: [
          {
               provide: WINDOW_TOKEN,
               useValue: window
          }
     ]
})
export class PaymentComponent implements OnInit {
     orderId: string;
     order;
     lState: 'idle' | 'loading' = 'idle';
     constructor(
          private activeRoute: ActivatedRoute,
          private router: Router,
          private _snackBar: MatSnackBar,
          @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService,
          @Inject(WINDOW_TOKEN) private window: Window
     ){
          this.orderId = activeRoute.snapshot.queryParams.orderId;
     }

     ngOnInit(): void {
          this.getOrder(this.orderId);
          this.orderService.watchOrder(this.orderId).pipe(
               tap((res) => console.log(res)),
               pluck('status'),
               filter((status) => !!status && status.toLowerCase() === 'paid'),
               switchMap(() => this._snackBar.open('Payment received', 'Ok').onAction().pipe(
                    switchMap(() => from(this.router.navigate(['/'])))
               )),
               tap(() => this.lState = 'idle')
          ).subscribe();
     }

     async getOrder(orderId: string): Promise<any> {
          try {
               this.order = await this.orderService.getOrder(this.orderId).toPromise();
          } catch (error) {
               console.log(error);
          }
     }

     get totalOrderAmount(): number {
          const products = Object.values(this.order?.products ?? {}) ?? [];
          return products.reduce((acc, curr: any) => acc + curr.price.value ?? 0, 0) as number;
     }

     async pay(){
          this.lState = 'loading';
          this.window.open(this.order?.gateway?.paystack?.authorization_url, '_blank')
     }
}