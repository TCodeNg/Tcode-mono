import { Component, Inject, OnInit } from '@angular/core';
import { Customer, User } from '@tcode/frontend-auth';
import { Router } from '@angular/router';
import { Product } from '@tcode/api-interface';
import { products } from './products';
import { trigger, transition, style, animate } from '@angular/animations';
import { CartService, CART_SERVICE_TOKEN } from '@tcode/cart';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tcode-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', '../../_base-style.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  generalProducts: Product[];
  realEstateProducts: Product[];
  inverterProducts: Product[];
  farmProducts: Product[];
  index: number;
  section: string;
  constructor(
    private router: Router,
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.generalProducts = products.general;
    this.realEstateProducts = products.realEstate;
    this.inverterProducts = products.inverters;
    this.farmProducts = products.farmProducts;
  }

  gotoProduct(e: MouseEvent, product: Product) {
    if (e.srcElement['tagName'] === 'IMG') {
      this.router.navigate(['/', 'product', product.objectId])
    }
  }

  navigateToRealEstate() {
    this.router.navigate(['/real-estate']);
  }

  navigateToInverters() {
    this.router.navigate(['/inverters']);
  }

  navigateToFarmProduce() {
    this.router.navigate(['/farm-produce']);
  }

  addToCart(product: Product, index: number, section: string) {
    this.index = index;
    this.section = section;
    const { objectId: productId } = product
    this.cartService.addToCart(productId).subscribe((res) => {
      this.index = undefined;
      this.section = undefined;
      this._snackbar.open('Product added to cart', '', {
        duration: 2000
      });
    }, (error) => {
      this.index = undefined;
      this.section = undefined;
      this._snackbar.open('Error adding product to cart', '', {
        duration: 2000
      });
    })
  }

}
