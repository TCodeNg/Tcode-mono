import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InputComponent } from './input/input.component';
import { ErrorRefDirective } from './inputError.directive';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CountryFlagPathPipe } from './country-flag-path.pipe';

@NgModule({
  imports: [CommonModule, MatMenuModule, MatIconModule, MatTooltipModule ],
  declarations: [
    InputComponent, ErrorRefDirective, PhoneNumberComponent, CountryFlagPathPipe
  ],
  exports: [
    InputComponent, ErrorRefDirective, PhoneNumberComponent
  ],
})
export class InputModule {}
