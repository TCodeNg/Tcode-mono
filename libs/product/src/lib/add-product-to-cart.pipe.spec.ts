import { ProductItemStateConfig } from '../';
import { AddProductToCartPipe } from './add-product-to-cart.pipe';

describe('AddProductToCartPipe', () => {
  let pipe = new AddProductToCartPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return idle by default', () => {
    const result = pipe.transform(undefined, undefined, undefined);

    expect(result).toEqual('idle');
  });

  it('should return idle when section arg is falsy', () => {
    const config: ProductItemStateConfig = {
      market: {
        abc: 'idle'
      }
    }; 
    const productId = 'abc';
    const result = pipe.transform(config, productId, undefined);
    expect(result).toEqual('idle');
  });

  it('should return idle when section is not in config', () => {
    const config: ProductItemStateConfig = {
      market: {
        abc: 'idle'
      }
    };

    const productId = 'abc';

    const result = pipe.transform(config, productId, 'farm');

    expect(result).toEqual(config.market.abc);
  });

  it('should return loading if state is loading', () => {
    const config: ProductItemStateConfig = {
      market: {
        abc: 'loading'
      }
    };
    const productId = 'abc';

    const result = pipe.transform(config, productId, 'market');

    expect(result).toEqual('loading');
  })
});
