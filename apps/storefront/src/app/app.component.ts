import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Customer } from '@tcode/frontend-auth';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: Customer;
  
  constructor(
    _user: User,
    private router: Router
  ){
    this.user = _user as Customer;
  }

  handleAuthAction(){
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): boolean {
    return this.user.isLoggedIn()
  }
  
}
