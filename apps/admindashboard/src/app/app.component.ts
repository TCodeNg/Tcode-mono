import { Component, OnInit } from '@angular/core';
import { Admin, User } from '@tcode/frontend-auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admindashboard';
  user: Admin;
  constructor(
    _user: User
  ) {
    this.user = _user as Admin;
  }

  ngOnInit(){}
  
   get isLoggedIn() {
    return this.user.isLoggedIn();
  }
}
