import React from 'react';
import { shallow } from 'enzyme';


import { CollectionItem } from './collection-item.component';

let wrapper;
let mockAddItem;
const mockImageUrl = 'www.testImage.com';
const mockName = 'black hat';
const mockPrice = "10";

beforeEach(() => {
  mockAddItem = jest.fn();
  const mockProps = {
    item: {
      imageUrl: 'www.testImage.com',
      price: mockPrice,
      name: mockName,
    },
    addItem: mockAddItem
  }

  wrapper = shallow(<CollectionItem {...mockProps} />)
})

describe('CollectionItem component', () => {
  it('should render CollectionItem component', () => {

    expect(wrapper).toMatchSnapshot();
  });
  it('should call addItem when AddButton is clicked', () => {
    wrapper.find('AddButton').simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });
  it('should render imageUrl passed as prop as Background image', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockImageUrl)
  });
  it('should render passed name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName)
  });
  it('should render passed name prop in NameContainer', () => {
    expect(wrapper.find('PriceContainer').text()).toBe(mockPrice)
  })
})