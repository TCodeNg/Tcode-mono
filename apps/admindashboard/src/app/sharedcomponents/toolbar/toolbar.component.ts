import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
  selector: 'tcode-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  constructor(){}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}