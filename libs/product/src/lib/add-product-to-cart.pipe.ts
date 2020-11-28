import { Pipe, PipeTransform } from '@angular/core';
import { ProductItemStateConfig } from '../';

@Pipe({
  name: 'addProductToCart',
  pure: true
})
export class AddProductToCartPipe implements PipeTransform {

  transform(config: ProductItemStateConfig, productId: string, section: string): 'idle' | 'loading' {
    if (!config) {
      return 'idle';
    }

    const configIdObj = config[section] ?? {};
    const state = configIdObj[productId] ?? 'idle';

    return state;
  }

}
