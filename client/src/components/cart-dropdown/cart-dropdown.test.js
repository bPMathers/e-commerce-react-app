import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };
    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should navigate to checkout and dipatch toggleCartHidden() when clicking CartDropdownButton ', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalledWith('/checkout');
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('should render render an equal number of cartItem components as the cartItems prop contain', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
  });

  it('should render an empty message container when cart is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };
    const wrapper2 = shallow(<CartDropdown {...mockProps} />);
    expect(wrapper2.exists('EmptyMessageContainer')).toBe(true);
  })
});