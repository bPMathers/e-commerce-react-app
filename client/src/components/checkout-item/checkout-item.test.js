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
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removeItem when left arrow is clicked', () => {
    expect.assertions(1);
    wrapper.find('QuantityContainer').childAt(0).simulate('click');

    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when right arrow is clicked', () => {
    expect.assertions(1);
    wrapper.find('QuantityContainer').childAt(2).simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should call clearItem when remove button is clicked is clicked', () => {
    expect.assertions(1);
    wrapper.find('RemoveButtonContainer').simulate('click');

    expect(mockClearItem).toHaveBeenCalled();
  });
});
