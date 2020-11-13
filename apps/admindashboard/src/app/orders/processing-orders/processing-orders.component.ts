import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
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
  isloading = false;
  constructor(
    private router: Router,
    @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService
  ) { }

  tableData$ = this.orderService.getOrders(0).pipe(
    tap(() => this.isloading = true),
    mergeAll(),
    map((order) => {
      return {
        ...order
      }
    }),
    toArray(),
    map((orders) => new MatTableDataSource(orders)),
    tap((orders) => {
      this.isloading = false;
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
        key: 'name',
      },
      {
        name: 'Date',
        key: 'createdAt',
        dataType: 'date'
      },
      // {
      //   name: 'symboling',
      //   key: 'symbol',
      //   onClick: this.handleClick,
      //   dataType: 'currency',
      //   currencyCode: 'EUR'
      // },
      // {
      //   name: 'Status',
      //   key: 'status',
      //   columnType: 'action'
      // }
    ]
  }

  ngOnDestroy(): void {

  }

  ngAfterViewInit() {
    
  }

  navigateToDetailPage = (data?): any => {
    console.log(data);
    // this.router.navigate([`${ROUTES.adminDashboard.orders.home}`, 2])
  }
}