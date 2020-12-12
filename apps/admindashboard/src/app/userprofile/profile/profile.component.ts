import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CardConfig } from 'libs/card/src/lib/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tcode-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pageTitle: string
  profileCardConfig: CardConfig;
  constructor(
    private activatedRoute: ActivatedRoute
  ){
    this.pageTitle = activatedRoute.snapshot.data.pageTitle
  }

  ngOnInit():void {
    this.profileCardConfig = {
      state: 'normal',
      editable: true
    }
  }
}