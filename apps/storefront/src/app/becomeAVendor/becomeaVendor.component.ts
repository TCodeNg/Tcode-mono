import { OnInit, OnDestroy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'tcode-become-a-vendor',
  templateUrl: './becomeaVendor.component.html',
  styleUrls: ['./becomeaVendor.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class BecomeAVendorComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  ngOnDestroy(){}

  navigateToRegister() {
    this.router.navigate(['/become-vendor', 'register'])
  }
}