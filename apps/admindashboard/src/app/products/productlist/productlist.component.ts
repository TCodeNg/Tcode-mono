import { Component, Inject, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';
import { ROUTES } from 'apps/admindashboard/src/core/constant';
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
    private router: Router,
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
    this.tableColumns = [
      {
        name: 'Name',
        key: 'title',
        onClick: this.navigateToDetailPage
      },
      {
        name: "Price",
        key: 'price',
        dataType: 'currency',
        currencyCode: 'NGN',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Product type',
        key: 'type',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Category',
        key: 'category',
        onClick: this.navigateToDetailPage
      },
      {
        name: 'Agent',
        key: 'agent'
      },
      {
        name: 'Status',
        key: 'status',
        dataType: 'pill'
      }
    ]
  }

  navigateToDetailPage = (data?: Product): any => {
    if(data && data.objectId){
      this.router.navigate([`${ROUTES.adminDashboard.products.home}`, data.objectId]);
    }
   }

  handleProductAdd(){
    console.log('Product added');
  }
}