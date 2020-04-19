import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collection-preview.component';

let wrapper, mockHistory, mockItems, mockItems2, mockMatch;

beforeEach(() => {
  mockItems = [{
    id: 1,
    imageUrl: 'www.testImage1.com',
    price: 10,
    name: "hat1",
  },
  {
    id: 2,
    imageUrl: 'www.testImage2.com',
    price: 15,
    name: "hat2",
  },
  {
    id: 3,
    imageUrl: 'www.testImage3.com',
    price: 20,
    name: "hat3",
  }];

  mockItems2 = [{
    id: 1,
    imageUrl: 'www.testImage1.com',
    price: 10,
    name: "hat1",
  },
  {
    id: 2,
    imageUrl: 'www.testImage2.com',
    price: 15,
    name: "hat2",
  },
  {
    id: 3,
    imageUrl: 'www.testImage3.com',
    price: 20,
    name: "hat3",
  },
  {
    id: 4,
    imageUrl: 'www.testImage4.com',
    price: 20,
    name: "hat4",
  },
  {
    id: 5,
    imageUrl: 'www.testImage5.com',
    price: 20,
    name: "hat5",
  }];

  mockHistory = {
    push: jest.fn()
  }

  mockMatch = {
    path: 'mockPath'
  }

  const mockProps = {
    title: 'hats',
    items: mockItems,
    history: mockHistory,
    match: mockMatch,
    routeName: 'mockRouteName'
  }

  wrapper = shallow(<CollectionPreview {...mockProps} />)
})

describe('CollectionPreview Component', () => {
  it('should render CollectionPreview component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call history.push() with correct argument when TitleContainer is clicked', () => {
    expect.assertions(2);
    wrapper.find('TitleContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockHistory.push).toHaveBeenCalledWith('mockPath/mockRouteName');
  });
  it('should render the same number of CollectionItems that it is passed as prop', () => {
    expect(wrapper.find('PreviewContainer').children().length).toBe(mockItems.length);
  });
  it('should not render more than 4 CollectionItems even if passed items prop is of greater length', () => {
    const mockProps2 = {
      title: 'hats',
      items: mockItems2,
      history: mockHistory,
      match: mockMatch,
      routeName: 'mockRouteName'
    }

    const wrapper2 = shallow(<CollectionPreview {...mockProps2} />)
    expect(wrapper2.find('PreviewContainer').children().length).toEqual(4);
  });
})