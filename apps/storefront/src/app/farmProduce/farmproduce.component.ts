import { Component, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { products } from './product';


@Component({
  selector: 'tcode-farmproduce',
  templateUrl: './farmproduce.component.html',
  styleUrls: ['./farmproduce.component.scss']
})
export class FarmproduceComponent implements OnInit {
  products: Product[];
  constructor(){}

  ngOnInit(): void {
    this.products = products;
  }
}