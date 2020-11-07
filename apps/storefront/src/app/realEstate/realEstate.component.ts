import { OnInit, Component } from '@angular/core';
import { Product } from '@tcode/api-interface';
import { products } from './products';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'tcode-real-estate',
  templateUrl: './realEstate.component.html',
  styleUrls: ['./realEstate.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class RealEstateComponent implements OnInit {
  products: Product[];
  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = products;
  }

  gotoProduct(e:MouseEvent, product: Product) {
    if(e.srcElement['tagName'] === 'IMG') {
      this.router.navigate(['/real-estate', 'product', product.objectId])
    }
  }

  addToCart(e){
    this.cartService.addItem(e, 1);
  }

}
