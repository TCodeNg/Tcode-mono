import { OnInit, Component } from '@angular/core';
import { Product } from '@tcode/api-interface';
import { products } from './products';
import { trigger, transition, style, animate } from '@angular/animations';

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
  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }
  
}