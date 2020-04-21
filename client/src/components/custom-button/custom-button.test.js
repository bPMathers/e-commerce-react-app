import React from 'react';
import { shallow } from 'enzyme'

import CustomButton from './custom-button.component';

describe('CustomButton component', () => {
  let wrapper, mockProps;

  beforeEach(() => {
    mockProps = {
      children: 'mockChildren'
    }

    wrapper = shallow(<CustomButton {...mockProps} />);
  });

  it('should render CustomButton component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render its children', () => {
    expect(wrapper.find('CustomButtonContainer').text()).toBe('mockChildren');
  })
});