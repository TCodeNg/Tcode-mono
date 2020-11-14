import { Component, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { products } from './product';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'tcode-inverter',
  templateUrl: './inverter.component.html',
  styleUrls: ['./inverter.component.scss',  '../../_base-style.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class InverterComponent implements OnInit {
  products: Product[];
  constructor(
    private router: Router,
    private cartService: CartService
  ){}

  ngOnInit(): void{
    this.products = products;
  }

  gotoProduct(e:MouseEvent, product: Product) {
    if(e.srcElement['tagName'] === 'IMG') {
      this.router.navigate(['/inverters', 'product', product.id])
    }
  }

  addToCart(e){
    this.cartService.addItem(e, 1);
  }
}