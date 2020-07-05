import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
})
export class CardModule {}
