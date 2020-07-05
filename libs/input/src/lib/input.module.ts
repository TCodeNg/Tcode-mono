import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ErrorRefDirective } from './inputError.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InputComponent, ErrorRefDirective
  ],
  exports: [
    InputComponent, ErrorRefDirective
  ],
})
export class InputModule {}
