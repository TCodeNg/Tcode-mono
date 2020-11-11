import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';

@Component({
     selector: 'tcode-payment',
     templateUrl: './payment.component.html',
     styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
     orderId: string;
     order;
     constructor(
          private activeRoute: ActivatedRoute,
          @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService
     ){
          this.orderId = activeRoute.snapshot.queryParams.orderId;
     }

     ngOnInit(): void {
          this.getOrder(this.orderId);
     }

     async getOrder(orderId: string): Promise<any> {
          try {
               this.order = await this.orderService.getOrder(this.orderId).toPromise();
          } catch (error) {
               console.log(error);
          }
     }

     async pay(){
          console.log(this.order);
     }
}