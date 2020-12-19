import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { filter } from 'rxjs/operators';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';

@Component({
  selector: 'tcode-product-list-lib',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.scss']
})
export class ProductUiComponent implements OnInit {
  @Input() pageTitle: string;
  @Output() ProductAdd = new EventEmitter();
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
        width: "33.5rem",
        minHeight: "16.625rem",
        hasBackdrop: true,
        panelClass: 'no-padding',
        disableClose: true
      }
    )
    this.addNewProductDialogRef.afterClosed().pipe(
      filter(value => value)
    ).subscribe(() => {
      this.ProductAdd.emit();
    })
  }

}
