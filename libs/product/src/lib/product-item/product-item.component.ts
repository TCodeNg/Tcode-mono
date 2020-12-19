import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@tcode/api-interface';

@Component({
  selector: 'tcode-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  dummyPdt: Product =  {
    objectId: "5ee4c28b55f776579bebcac2",
    productId: '333',
    category: [
      "5ee4b2530ee45f000dabb459"
    ],
    images: [
      {
        image: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_vbs2ir.svg',
        thumb: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_vbs2ir.svg',
        public_Id: 'x',
        width: 200,
        height: 200
      }
    ],
    title: "4 bedroom duplex - Ikeja GRA",
    price: {
      value: 90000000,
      currency: 'NGN'
    },
    type: 'estate',
    description: "4 bedroom duplex - Ikeja GRA",
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
      totalScore: 2,
      userScore: 3
    },
  }

  @Input() product: Product;
  @Input() state: 'idle' | 'loading' = 'idle';
  @Output() onAddToCart = new EventEmitter();
  @Output() onRateProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

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
