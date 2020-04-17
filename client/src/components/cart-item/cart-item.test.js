import React from 'react';
import { shallow } from 'enzyme';

import CartItem from './cart-item.component';

describe('cartItem component', () => {
  it('should render cartItem component', () => {
    const mockItem = {
      imageUrl: 'www.imageUrl.com',
      price: 10,
      name: 'itemName',
      quantity: 1
    }

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  })
})
