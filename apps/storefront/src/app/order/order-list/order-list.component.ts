import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order, OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
import { TableColumn } from 'libs/table/src/lib/table/model';
import { map, mergeAll, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'tc-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  tableColumns: TableColumn[];
  constructor(
    private router: Router,
    @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService
  ) { }

  tableData$ = this.orderService.getOrders(0).pipe(
    mergeAll(),
    map((order) => {
      return {
        ...order,
        shipTo: order?.contact?.shippingInformation?.address || 'N/A',
        totalAmount: order.totalAmount
      }
    }),
    toArray(),
    map((orders) => new MatTableDataSource(orders)),
  );

  ngOnInit(): void {
    this.tableData$.subscribe();
    this.tableColumns = [
      {
        name: 'Order no.',
        key: 'objectId',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Date',
        key: 'createdAt',
        dataType: 'date',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Payment status',
        key: 'status',
        onClick: this.navigateToDetailPage
      },
      {
        name: "Total",
        key: 'totalAmount',
        dataType: 'currency',
        currencyCode: 'NGN',
        onClick: this.navigateToDetailPage
      },
    ]
  }

  navigateToDetailPage = (data?: Order): any => {
    if(data && data.objectId){
      this.router.navigate([`/orders`, data.objectId]);
    }
   }

}
