import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TableColumn } from 'libs/table/src/lib/table/model';

@Component({
  selector: 'tcode-admin-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  pageTitle: string;
  tableData: MatTableDataSource<any>;
  tableColumns: TableColumn[];
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.pageTitle = activatedRoute.snapshot.data.pageTitle
  }

  ngOnInit(): void {
    this.tableData = new MatTableDataSource(
      [
        { position: 1, name: 'Hydrogen', weight: new Date(Date.now()), symbol: 200 },
        { position: 2, name: 'Helium', weight: new Date(Date.now()), symbol: 300 },
        { position: 3, name: 'Lithium', weight: new Date(Date.now()), symbol: 800 },
        { position: 4, name: 'Beryllium', weight: new Date(Date.now()), symbol: 1200 },
        { position: 5, name: 'Boron', weight: new Date(Date.now()), symbol: 20000 },
        { position: 6, name: 'Carbon', weight: new Date(Date.now()), symbol: 20 },
        { position: 7, name: 'Nitrogen', weight: new Date(Date.now()), symbol: 900 },
        { position: 8, name: 'Oxygen', weight: new Date(Date.now()), symbol: 1 },
        { position: 9, name: 'Fluorine', weight: new Date(Date.now()), symbol: 0 },
      ]
    );
    this.tableColumns = [
      {
        name: 'positioning',
        key: 'position',
      },
      {
        name: 'naming',
        key: 'name',
      },
      {
        name: 'weighting',
        key: 'weight',
        dataType: 'date'
      },
      {
        name: 'symboling',
        key: 'symbol',
        onClick: this.handleClick,
        dataType: 'currency',
        currencyCode: 'EUR'
      },
      {
        name: 'Status',
        key: 'status',
        columnType: 'action'
      }
    ]
  }

  ngOnDestroy(): void { }

  handleClick(data?): any {
    console.log({ data })
  }
}