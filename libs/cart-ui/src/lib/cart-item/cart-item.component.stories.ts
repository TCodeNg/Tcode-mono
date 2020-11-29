import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component'
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'CartItemComponent'
}

export const Idle = () => ({
  moduleMetadata: {
    imports: [CommonModule, MatIconModule]
  },
  component: CartItemComponent,
  props: {
  }
});
