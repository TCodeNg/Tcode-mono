import { OnInit, Component } from '@angular/core';
import { Product } from '@tcode/api-interface';
import { products } from './products';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = products;
  }

  gotoProduct(product: Product) {
    this.router.navigate(['/real-estate', 'product', product.id])
  }
  
}