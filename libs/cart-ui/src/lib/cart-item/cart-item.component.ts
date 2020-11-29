import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild, OnDestroy, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '@tcode/api-interface';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil, tap } from 'rxjs/operators';

const GLOBAL_DEBOUNCE_TIME = 2000;
@Component({
  selector: 'tcode-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() cartItem?: any;
  @Output() goToProduct = new EventEmitter<string>();
  @Output() removeFromCart = new EventEmitter<Product>();
  @Output() reduceQuantity = new EventEmitter<Product>();
  @Output() increaseQuantity = new EventEmitter<Product>();
  @Output() updateByQuantity = new EventEmitter<{product: Product, quantity: number}>();

  @ViewChild('reduceBtn', { static: false }) reduceBtnRef: ElementRef;
  @ViewChild('addBtn', { static: false }) addBtnRef: ElementRef;

  count = 0; // This is independent of cart item
  destroy$ = new Subject<boolean>();


  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.reduceBtnRef.nativeElement, 'click').pipe(
      tap(() => {
        if (this.count > 1) {
          this.count = this.count - 1;
        } else {
          this.count = 1;
        }
        this.cd.detectChanges();
      }),
      debounceTime(GLOBAL_DEBOUNCE_TIME),
      tap(() => this.updateByQuantity.emit({product: this.cartItem.item, quantity: this.count})),
      takeUntil(this.destroy$)
    ).subscribe();

    fromEvent(this.addBtnRef.nativeElement, 'click').pipe(
      tap(() => {
        this.count = this.count + 1;
        this.cd.detectChanges();
      }),
      debounceTime(GLOBAL_DEBOUNCE_TIME),
      tap(() => this.updateByQuantity.emit({product: this.cartItem.item, quantity: this.count})),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.cartItem) {
      this.count = change.cartItem.currentValue.quantity;
    }
  }

  doRemoveFromCart(item: Product) {
    this.removeFromCart.emit(item);
  }

  doReduceQuantity(item: Product) {
    this.reduceQuantity.emit(item);
  }

  doIncreaseQuantity(item: Product) {
    this.increaseQuantity.emit(item);
  }

  gotoProductPage(product: Product) {
    const urlPath = product.type === 'estate' ? 'real-estate' : product.type === 'inverter' ? 'inverters' : 'farm-produce';
    this.goToProduct.emit(`/${urlPath}/product/${product.objectId}`);
  }

}
