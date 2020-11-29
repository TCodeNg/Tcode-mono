import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component'

export default {
  title: 'CartItemComponent'
}

export const Idle = () => ({
  moduleMetadata: {
    imports: [CommonModule]
  },
  component: CartItemComponent,
  props: {
  }
});
