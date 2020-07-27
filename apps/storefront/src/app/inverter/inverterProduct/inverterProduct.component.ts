import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'tcode-inverter-product',
  templateUrl: './inverterProduct.component.html',
  styleUrls: ['./inverterProduct.component.scss']
})
export class InverterProductComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute
  ){}

  productId$ = this.activeRoute.params.pipe(
    map((res: any) =>res.id)
  );

  ngOnInit(): void {}
}