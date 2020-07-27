import { Component, OnInit } from "@angular/core";
import { Product } from '@tcode/api-interface';
import { ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'tcode-landing-product',
  templateUrl: './landingProduct.component.html',
  styleUrls: ['landingProduct.component.scss']
})
export class LandingProductComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ){
  
  }

  productId$ = this.activeRoute.params.pipe(
    map((res: any) =>res.id)
  );

  ngOnInit(): void {}
}