import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { InputModule } from '@tcode/input'
import { ReactiveFormsModule } from '@angular/forms';
import { DataGetterPipe } from './table/dataGetter.pipe';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    InputModule,
    ReactiveFormsModule
  ],
  declarations: [TableComponent, DataGetterPipe],
  exports: [TableComponent, DataGetterPipe],
})
export class TableModule { }
