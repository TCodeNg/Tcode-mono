import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'libs/api-interface/src/lib/image';

@Component({
  selector: 'tcode-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  dummyPdt: Product = {
    _id: "5ee4c28b55f776579bebcac2",
    category: [
      "5ee4b2530ee45f000dabb459"
    ],
    images: [
      {
        id: 'xxx',
        image: 'https://res.cloudinary.com/horlabyc/image/upload/v1556649509/dcw0stlkpnmm6gnf5llu.jpg',
        thumb: 'https://res.cloudinary.com/horlabyc/image/upload/c_scale,w_200/v1556649509/dcw0stlkpnmm6gnf5llu.jpg'
      }
    ],
    title: "Handmaid",
    price: 200,
    currency: {
      iso: "NGN"
    },
    type: "farm",
    description: "premium bed machine",
    owner: '5ee4b2530ee45f000dabb459',
    acl: {
      "*": {
        "read": true,
        "create": false,
        "update": false,
        "delete": false
      },
      "5ee4a4634dab7001d1a21b71": {
        "read": true,
        "create": true,
        "update": true,
        "delete": true
      },
      "friendsOf_5ee4a4634dab7001d1a21b71": {
        "read": true,
        "create": false,
        "update": false,
        "delete": false
      }
    },
    status: "pending",
    created: "2020-06-13T12:11:55.453Z",
    updated: "2020-06-13T12:11:55.453Z",
    rating: {
      totalRatings: 1,
      score: 2,
      userScore: 3
    }
  }

  @Input() product: Product = this.dummyPdt;
  @Output() addToCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  get productUserScore(): number {
    return this.product.rating.userScore;
  }

  handleAddtoCart(){
    this.addToCart.emit(this.product);
  }

}

export interface Product {
  _id:           string;
  category:      string[];
  images:        Image[];
  title:         string;
  price:         number;
  currency:      { iso: string};
  type:          string;
  description:   string;
  owner:         string;
  acl?:          any;
  status:        string,
  created:       string,
  updated:        string,
  rating: {
    totalRatings: number,
    score: number,
    userScore: number
  }
}


