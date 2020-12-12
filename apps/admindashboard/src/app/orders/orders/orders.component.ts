import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
import { TableColumn } from 'libs/table/src/lib/table/model';

@Component({
  selector: 'tcode-admin-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  pageTitle: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.pageTitle = activatedRoute.snapshot.data.pageTitle
  }

  ngOnInit(): void {}

  ngOnDestroy(): void { }


}