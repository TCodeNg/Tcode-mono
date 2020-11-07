import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataGetterPipe } from './table/dataGetter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [TableComponent, DataGetterPipe],
  exports: [TableComponent, DataGetterPipe],
})
export class TableModule { }
