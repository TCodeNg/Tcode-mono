import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TableColumn } from './model';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators'


@Component({
  selector: 'tcode-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() dataSource: MatTableDataSource<any>;
  @Input() tableColumns: TableColumn[];
  dataColumns: string[];
  @Input() pageSize: number = 5;
  @Input() length: number = 10;
  @Input() isSearchable: boolean = true;
  @Input() hasPagination: boolean = true;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  search = new FormControl('');

  searchTable = new BehaviorSubject(null);
  @Output() onSearch = new EventEmitter();
  sub: Subscription;
  constructor() { }

  ngOnInit(): void {
    const columnNames = this.tableColumns && this.tableColumns.map(({ name }) => name);
    this.dataColumns = columnNames;
    this.sub = this.search.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      filter((term) => term.length > 1),
      tap(() => {
        this.onSearch.emit(this.search.value)
      })
    ).subscribe()
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
