import { Component, OnInit, Input } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { PageProducts } from '../../PageProducts';

@Component({
  selector: 'tcode-product-detail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['productDetail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productId: string;
  product: Product;
  productQuantity = 1;
  constructor(){}

  ngOnInit(): void {
    this.product = PageProducts.find((product) => product.id === this.productId);
  }

  get productUserScore(): number {
    return this.product && this.product.rating && this.product.rating.userScore;
  }

  rateProduct(e) {
    console.log(e)
  }

  adjustQuantity(increase) {
    const newQuantity = this.productQuantity += increase;
    if(newQuantity < 0){
      this.productQuantity = 0;
    } else {
      this.productQuantity = newQuantity
    }
  }
}