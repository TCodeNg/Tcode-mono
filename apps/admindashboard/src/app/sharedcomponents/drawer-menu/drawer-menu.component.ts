import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
  selector: 'tcode-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['drawer-menu.component.scss']
})
export class DrawerMenuComponent implements OnInit, OnDestroy {
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