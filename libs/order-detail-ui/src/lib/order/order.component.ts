import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Order } from '@tcode/order';
import {} from '@tcode/card'
import { CardConfig } from 'libs/card/src/lib/model';
import { TableColumn } from 'libs/table/src/lib/table/model';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'tc-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges {
  @Input() order: Order;
  @Input() context: 'storefront' | 'vendor' | 'admin' = 'storefront';
  tableData;
  initialCardConfig: CardConfig = {
    state: 'normal',
    editable: false
  }
  tableColumns: TableColumn[] = [
    {
      name: 'Item',
      key: 'title',
    },
    {
      name: 'Price',
      key: 'price',
      dataType: 'currency',
      currencyCode: 'NGN'
    },
    {
      name: 'Quantity',
      key: 'total',
    },
    {
      name: 'Total',
      key: 'total',
      dataType: 'currency',
      currencyCode: 'NGN'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.order){
      const products = Object.values(this.order?.products?? {}) || []
      this.tableData = new MatTableDataSource(products.map((product) => {
        return {
          ...product,
          price: product.price.value,
          currency: product.price.currency,
          total: product.price.value
        }
      }));
    }
  }

}
