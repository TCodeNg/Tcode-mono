import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, User } from '@tcode/frontend-auth';
import { Router } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { products } from './products';
import { trigger, transition, style, animate } from '@angular/animations';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'tcode-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', '../../_base-style.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class LandingComponent implements OnInit {
  generalProducts: Product[];
  realEstateProducts: Product[];
  inverterProducts: Product[];
  farmProducts: Product[];
  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.generalProducts = products.general;
    this.realEstateProducts = products.realEstate;
    this.inverterProducts = products.inverters;
    this.farmProducts = products.farmProducts;
  }

  gotoProduct(e: MouseEvent, product: Product) {
    if(e.srcElement['tagName'] === 'IMG') {
      this.router.navigate(['/', 'product', product.id])
    }
  }

  navigateToRealEstate(){
    this.router.navigate(['/real-estate']);
  }

  navigateToInverters(){
    this.router.navigate(['/inverters']);
  }

  navigateToFarmProduce(){
    this.router.navigate(['/farm-produce']);
  }

  addToCart(e){
    this.cartService.addItem(e, 1);
  }

}
