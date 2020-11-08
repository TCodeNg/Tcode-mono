import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CardConfig } from 'libs/card/src/lib/model';

@Component({
  selector: 'tcode-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  orderId: string;
  initialCardConfig: CardConfig = {
    state: 'normal',
    editable: false
  }
  date = new Date(Date.now())
  constructor(
    private activateRoute: ActivatedRoute
  ) {
    this.orderId = this.activateRoute.snapshot.params.id
  }

  ngOnInit() { }

  ngOnDestroy() { }
}