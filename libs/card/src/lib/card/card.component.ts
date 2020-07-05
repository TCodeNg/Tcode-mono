import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { CardConfig } from '../model';

@Component({
  selector: 'tcode-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  initialCardConfig: CardConfig = {
    state: 'normal',
    editable: true
  }

  @Input() config: CardConfig = this.initialCardConfig;
  @Input() editTemplRef?: TemplateRef<any>;
  @Input() savingTemplRef?: TemplateRef<any>;
  @Input() loadingTemplRef?: TemplateRef<any>;
  @Output() save = new EventEmitter();

  constructor() { }

  changeToEditState(){
    this.config = {
      ...this.config,
      state: 'editing'
    }
  }

  handleSave() {
    this.save.emit();
  }

  handleCancel() {
    this.config = {
      ...this.config,
      state: 'normal'
    }
  }

}
