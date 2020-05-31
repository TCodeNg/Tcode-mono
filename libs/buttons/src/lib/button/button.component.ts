import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tcode-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() state: 'idle' | 'loading' = 'idle';
  @Input() type: 'icon' | 'normal' = 'icon';
  @Input() disabled: boolean = false;
  @Output() handleClick = new EventEmitter();
  @Input() iconName: string = 'favorite_border';

  ngOnInit(): void {
  }

  onClick() {
    this.handleClick.emit();
  }

}
