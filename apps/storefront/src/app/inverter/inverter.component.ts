import { Component, Inject, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { products } from './product';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService, PRODUCT_SERVICE_TOKEN } from "@tcode/product";
import { Observable } from "rxjs";
import { mergeAll, tap, toArray } from "rxjs/operators";

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
  products: Observable<Product[]>;
  limit = 4;
  btnState = 'idle';
  constructor(
    private router: Router,
    private cartService: CartService,
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService
  ){}

  ngOnInit(): void{
    this.fetchProduct();
  }

  fetchProduct(){
    this.btnState = 'loading';
    this.products = this.productService.getProducts(0, this.limit, 'inverter').pipe(
      mergeAll(),
      toArray(),
      tap(() => this.btnState = 'idle')
    );
  }

  loadMoreProducts(){
    this.limit += 4;
    this.fetchProduct();
  }

  gotoProduct(e:MouseEvent, product: Product) {
    if(e.srcElement['tagName'] === 'IMG') {
      this.router.navigate(['/inverters', 'product', product.objectId])
    }
  }

  addToCart(e){
    this.cartService.addItem(e, 1);
  }
}
