import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';



@Component({
  selector: 'tcode-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  constructor(){

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}