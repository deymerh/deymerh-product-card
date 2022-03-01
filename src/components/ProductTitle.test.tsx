import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard} from '../components';
import { product1 } from '../data/products';

describe('Test in <ProductTitle />', () => {
    test('should to show the component correctly', () => {
      const wrapper = renderer.create(
        <ProductTitle title='Custom test title' />
      )
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should to show the product name from app context', () => {
      const wrapper = renderer.create(
        <ProductCard
          product={product1}
        >
          {
            ()=>(
              <ProductTitle />
            )
          }
        </ProductCard>
      )
      expect(wrapper.toJSON()).toMatchSnapshot();
    })
})