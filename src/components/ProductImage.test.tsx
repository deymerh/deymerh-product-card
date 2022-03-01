import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard, ProductImage } from '.';

import { product1, product2 } from '../data/products';

describe('Test in <ProductImage />', () => {
    
    test('should to show the component correctly without the image', () => {
       const wrapper = renderer.create(
           <ProductCard
            product={product1}
           >
           {
               ()=>(
                   <ProductImage img='https://deymerh.co/profile.jpg' />
               )
           }
           </ProductCard>
       )
       expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should to show the component correctly with the image', () => {
       const wrapper = renderer.create(
           <ProductCard
            product={product2}
           >
           {
               ()=>(
                   <ProductImage />
               )
           }
           </ProductCard>
       )
       expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
})