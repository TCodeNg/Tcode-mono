import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';

@Component({
  selector: 'tcode-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: string;
  constructor(
    private activateRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService
  ) { 
    this.productId = this.activateRoute.snapshot.params.id
  }

  product$ = this.productService.getProduct(this.activateRoute.snapshot.params.id);


  ngOnInit(): void {
    this.product$.subscribe(console.log);
  }

}
