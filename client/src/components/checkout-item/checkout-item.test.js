import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './checkout-item.component';

// why am I putting this outside beforeEach?
let wrapper;
let mockClearItem;
let mockAddItem;
let mockRemoveItem;

beforeEach(() => {
  mockClearItem = jest.fn();
  mockAddItem = jest.fn();
  mockRemoveItem = jest.fn();
  const mockProps = {
    cartItem: {
      imageUrl: 'www.imageUrl.com',
      price: 10,
      name: 'itemName',
      quantity: 1
    },
    clearItem: mockClearItem,
    addItem: mockAddItem,
    removeItem: mockRemoveItem
  };

  wrapper = shallow(<CheckoutItem {...mockProps} />);
});

describe('CheckoutItem component', () => {
  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
