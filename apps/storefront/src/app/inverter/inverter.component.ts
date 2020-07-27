import { Component, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { products } from './product';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'tcode-inverter',
  templateUrl: './inverter.component.html',
  styleUrls: ['./inverter.component.scss'],
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
  constructor(){}

  ngOnInit(): void{
    this.products = products;
  }
}