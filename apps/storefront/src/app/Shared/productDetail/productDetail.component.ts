import { Component, OnInit, Input, Inject, OnChanges, SimpleChanges } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'tcode-product-detail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() productId: string;
  product$: Observable<Product>;
  constructor(
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService
  ){}

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(console.log);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.productId){
      this.product$ = this.productService.getProduct(this.productId);
    }
  }
}
