import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tcode-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() score: number = 0;
  @Input() totalRatings: number = 0;
  @Output() onRate = new EventEmitter();
  stars = [];
  constructor() { }

  ngOnInit(): void {
    this.createStars();
  }

  createStars() {
    this.stars = [];
    Array.from({length: this.score}, (item, index) => {
      this.stars.push(`solid`);
    });
    Array.from({length: 5 - this.score}, (item, index) => {
      this.stars.push(`light`);
    });
  }

  rate(number: number){
    if(this.score === 1 && number === 1){
      this.score = 0;
    } else {
      this.score = number;
    }
    this.createStars();
    this.onRate.emit(this.score);
  }

}
