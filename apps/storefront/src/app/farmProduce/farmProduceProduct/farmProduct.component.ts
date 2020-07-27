import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tcode-farm-product',
  styleUrls: ['./farmProduct.component.scss'],
  templateUrl: './farmProduct.component.html'
})
export class FarmProductComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ){}

  productId$ = this.activeRoute.params.pipe(
    map((res: any) =>res.id)
  );

  ngOnInit(): void {}

}