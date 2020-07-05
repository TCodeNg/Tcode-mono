import { Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[input-error]'
})

export class ErrorRefDirective {
  constructor(private el: ElementRef) {
  }

  get classes() {
    return this.el.nativeElement.classList;
  }
}
