import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tcode-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() score: number = 3;
  @Input() totalRatings: number = 50;
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
    this.score = number;
    this.createStars();
    this.onRate.emit(this.score)
  }

}
