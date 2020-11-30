import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';

@Component({
  selector: 'tcode-product-list-lib',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.scss']
})
export class ProductUiComponent implements OnInit {
  @Input() pageTitle: string;
  private addNewProductDialogRef: MatDialogRef<
    AddNewProductComponent
  >;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  doAddNewProduct() {
    this.addNewProductDialogRef = this.dialog.open(
      AddNewProductComponent, {
        width: "37.5rem",
        minHeight: "16.625rem",
        hasBackdrop: true,
      }
    )
  }

}
