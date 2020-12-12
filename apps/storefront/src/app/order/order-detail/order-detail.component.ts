import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
import { CardConfig } from 'libs/card/src/lib/model';
import { TableColumn } from 'libs/table/src/lib/table/model';

@Component({
  selector: 'tc-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderId: string;
  initialCardConfig: CardConfig = {
    state: 'normal',
    editable: false
  }
  tableData: MatTableDataSource<any>;
  tableColumns: TableColumn[];
  constructor(
    private activateRoute: ActivatedRoute,
    @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService
  ) { 
    this.orderId = this.activateRoute.snapshot.params.id
  }
  
  order$ = this.orderService.getOrder(this.activateRoute.snapshot.params.id);
  ngOnInit(): void {
    this.order$.subscribe(console.log)
  }

}
