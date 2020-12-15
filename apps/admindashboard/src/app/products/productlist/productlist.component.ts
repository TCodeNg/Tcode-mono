import { Component, Inject, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';
import { TableColumn } from 'libs/table/src/lib/table/model';
import { map, mergeAll, toArray } from 'rxjs/operators';

@Component({
  selector: 'tcode-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle: string;
  tableData: MatTableDataSource<any>;
  tableColumns: TableColumn[];
  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService
  ) {
    this.pageTitle = activatedRoute.snapshot.data.pageTitle
  }

  tableData$ = this.productService.getProducts().pipe(
    mergeAll(),
    map((product) => {
      return {
        ...product,
        price: product?.price?.value,
        currency: product?.price?.currency,
        agent: product?.agent?.title,
        owner: product?.owner?.title
      }
    }),
    toArray(),
    map((products) => new MatTableDataSource(products))
  );

  ngOnInit(): void {
    this.productService.getProducts().pipe(
      mergeAll(),
      map((product) => {
        return {
          ...product,
          price: product?.price?.value,
          currency: product?.price?.currency,
          agent: product?.agent?.title,
          owner: product?.owner?.title
        }
      }),
      toArray(),
    ).subscribe((pr) => console.log(pr))
    this.tableColumns = [
      {
        name: 'Name',
        key: 'name'
      },
      {
        name: "Price",
        key: 'price',
        dataType: 'currency',
        currencyCode: 'NGN'
      },
      {
        name: 'Product type',
        key: 'type'
      },
      {
        name: 'Category',
        key: 'category'
      },
      {
        name: 'Agent',
        key: 'agent'
      },
      {
        name: 'Status',
        key: 'status'
      }
    ]
  }

  navigateToDetailPage = (data?: Product): any => {
    // if(data && data.objectId){
    //   this.router.navigate([`${ROUTES.adminDashboard.orders.home}`, data.objectId]);
    // }
   }

  handleProductAdd(){
    console.log('Product added');
  }
}