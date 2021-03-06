import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order, OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
import { ROUTES } from 'apps/admindashboard/src/core/constant';
import { TableColumn } from 'libs/table/src/lib/table/model';
import { map, mergeAll, startWith, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'tcode-orders-processing',
  templateUrl: './processing-orders.component.html',
  styleUrls: ['./processing-orders.component.scss']
})
export class ProcessingOrdersComponent implements OnInit, OnDestroy, AfterViewInit {
  tableData: MatTableDataSource<any>;
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
    tap((orders) => {
      this.tableData = orders;
    })
  )

  ngOnInit(): void {
    
    this.tableColumns = [
      {
        name: 'Order Id',
        key: 'objectId',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Ship to',
        key: 'shipTo',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Date',
        key: 'createdAt',
        dataType: 'date',
        onClick: this.navigateToDetailPage
      },
      {
        name: "Total",
        key: 'totalAmount',
        dataType: 'currency',
        currencyCode: 'NGN'
      },
      {
        name: 'Status',
        key: 'status',
      },
    ]
  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit() {
    
  }

  navigateToDetailPage = (data?: Order): any => {
   if(data && data.objectId){
     this.router.navigate([`${ROUTES.adminDashboard.orders.home}`, data.objectId]);
   }
  }
}