import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, OnChanges, HostBinding, ElementRef, ContentChild } from '@angular/core';
import { ErrorRefDirective } from '../inputError.directive';

@Component({
  selector: 'tcode-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterContentInit {

  constructor() { }

  hasError = false;

  @ContentChildren(
    ErrorRefDirective, {descendants: true, read: ElementRef}
  ) inputError: QueryList<ElementRef>;


  ngAfterContentInit(): void {
    this.inputError.changes.pipe(
    ).subscribe(
      hasError => {
        this.hasError = hasError
      },
      err => console.error(err),
      () => console.log('Done')
    );
  }

  @HostBinding('class.input-error') get error(): boolean {
    return this.hasError;
  }
}
