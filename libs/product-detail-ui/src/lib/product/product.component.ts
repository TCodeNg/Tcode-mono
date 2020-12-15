import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product} from '@tcode/api-interface';
import { ProductService, PRODUCT_SERVICE_TOKEN} from '@tcode/product';
import { CartService, CART_SERVICE_TOKEN } from '@tcode/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'tc-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductDetailLibComponent implements OnInit, OnChanges {
  @Input()
  product!: Product;
  @Input() context: 'storefront' | 'vendor' | 'admin' = 'storefront';
  constructor(
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService,
    private _snackbar: MatSnackBar,
    @Inject(CART_SERVICE_TOKEN) private cartService: CartService,
  ) { }

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges) {
    console.log(change.product)
  }

  get productUserScore(): number {
    return (this.product && this.product.rating && this.product.rating.userScore) || 0;
  }

  rateProduct(e: any) {
    console.log(e);
  }

  addToCart() {
    // this.loadingHelper(product.objectId, section, 'loading');
    const { objectId: productId } = this.product;
    this.cartService.addToCart(productId).subscribe((res) => {
      this._snackbar.open('Product added to cart', '', {
        duration: 2000
      });
      // this.loadingHelper(product.objectId, section, 'idle');
    }, (error) => {
      this._snackbar.open('Error adding product to cart', '', {
        duration: 2000
      });
      // this.loadingHelper(product.objectId, section, 'idle');
    })
  }

}
