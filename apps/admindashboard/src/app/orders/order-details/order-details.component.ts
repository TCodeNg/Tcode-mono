import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CardConfig } from 'libs/card/src/lib/model';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TableColumn } from 'libs/table/src/lib/table/model';
import { OrderService, ORDER_SERVICE_TOKEN } from '@tcode/order';
import { tap } from 'rxjs/operators';

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
  tableData: MatTableDataSource<any>;
  tableColumns: TableColumn[];
  constructor(
    private activateRoute: ActivatedRoute,
    private modalService: MatDialog,
    @Inject(ORDER_SERVICE_TOKEN) private orderService: OrderService
  ) {
    this.orderId = this.activateRoute.snapshot.params.id
  }

  order$ = this.orderService.getOrder(this.activateRoute.snapshot.params.id);

  ngOnInit() {
  }

  ngOnDestroy() { }
}