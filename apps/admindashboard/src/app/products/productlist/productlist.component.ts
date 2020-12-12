import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tcode-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.pageTitle = activatedRoute.snapshot.data.pageTitle
  }

  ngOnInit(): void {

  }
}