import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tcode-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnauthorisedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
