import { Component, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { products } from './product';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'tcode-farmproduce',
  templateUrl: './farmproduce.component.html',
  styleUrls: ['./farmproduce.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class FarmproduceComponent implements OnInit {
  products: Product[];
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.products = products;
  }

  gotoProduct(product: Product) {
    this.router.navigate(['/farm-produce', 'product', product.id])
  }
}