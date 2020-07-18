import { Component, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { products } from './product';

@Component({
  selector: 'tcode-inverter',
  templateUrl: './inverter.component.html',
  styleUrls: ['./inverter.component.scss']
})
export class InverterComponent implements OnInit {
  products: Product[];
  constructor(){}

  ngOnInit(): void{
    this.products = products;
  }
}