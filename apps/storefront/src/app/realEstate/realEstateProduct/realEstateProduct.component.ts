import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tcode-realestate-product',
  styleUrls: ['./realEstateProduct.component.scss'],
  templateUrl: './realEstateProduct.component.html'
})
export class RealEstateProductComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ){}

  productId$ = this.activeRoute.params.pipe(
    map((res: any) =>res.id)
  );

  ngOnInit(): void {}

}