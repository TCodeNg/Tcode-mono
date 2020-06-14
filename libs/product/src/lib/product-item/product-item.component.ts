import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@tcode/api-interface';

@Component({
  selector: 'tcode-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  dummyPdt: Product = {
    id: "5ee4c28b55f776579bebcac2",
    category: [
      "5ee4b2530ee45f000dabb459"
    ],
    images: [
      {
        image: 'https://res.cloudinary.com/horlabyc/image/upload/v1556649509/dcw0stlkpnmm6gnf5llu.jpg',
        thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1556649509/dcw0stlkpnmm6gnf5llu.jpg'
      }
    ],
    title: "Locally made hand sanitizer",
    price: {
      value: 200,
      currency: {
        id: 'xxx',
        iso: 'NGN'
      }
    },
    type: "farm",
    description: "premium bed machine",
    agent:{
      id: '5ee4b2530ee45f000dabb459',
      title: 'Vendor'
    },
    owner: {
      id: '5ee4b2530ee45f000dabb459',
      title: 'Vendor'
    },
    status: "pending",
    created: new Date("2020-06-13T12:11:55.453Z"),
    updated: new Date("2020-06-13T12:11:55.453Z"),
    rating: {
      totalRatings: 1,
      score: 2,
      userScore: 3
    }
  }

  @Input() product: Product = this.dummyPdt;
  @Output() onAddToCart = new EventEmitter();
  @Output() onRateProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  get productUserScore(): number {
    return this.product && this.product.rating &&this.product.rating.userScore;
  }

  handleAddtoCart(){
    this.onAddToCart.emit(this.product);
  }

  rateProduct(e) {
    this.onRateProduct.emit(e);
  }

}