import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'tcode-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pageTitle: string
  constructor(
    private activatedRoute: ActivatedRoute
  ){
    this.pageTitle = activatedRoute.snapshot.data.pageTitle
  }

  ngOnInit():void {
    
  }
}