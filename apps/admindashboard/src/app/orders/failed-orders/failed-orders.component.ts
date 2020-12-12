import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'libs/table/src/lib/table/model';

@Component({
  selector: 'tcode-orders-failed',
  templateUrl: './failed-orders.component.html',
  styleUrls: ['./failed-orders.component.scss']
})
export class FailedOrdersComponent implements OnInit, OnDestroy {
  tableData: MatTableDataSource<any>;
  tableColumns: TableColumn[];
  constructor() { }

  ngOnInit(): void {
    this.tableData = new MatTableDataSource(
      [
        { position: 10, name: 'Neon', weight: new Date(Date.now()), symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: new Date(Date.now()), symbol: 'Na' },
        { position: 12, name: 'Magnessium', weight: new Date(Date.now()), symbol: 'Mg' },
        { position: 13, name: 'Aluminium', weight: new Date(Date.now()), symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: new Date(Date.now()), symbol: 'Si' },
        { position: 15, name: 'Phosphorous', weight: new Date(Date.now()), symbol: 'Ph' },
        { position: 16, name: 'Sulphur', weight: new Date(Date.now()), symbol: 'Su' },
        { position: 17, name: 'Chlorine', weight: new Date(Date.now()), symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: new Date(Date.now()), symbol: 'Ar' },
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
        name: 'symbol',
        key: 'symbol',
        onClick: this.handleClick,
        dataType: 'normalText',
      },
    ]
  }

  ngOnDestroy(): void {

  }

  handleClick(data?): any {
    console.log({ data })
  }
}