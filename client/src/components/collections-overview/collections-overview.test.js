import React from 'react';
import { shallow } from 'enzyme'

import { CollectionsOverview } from './collections-overview.component';

describe('CollectionsOverview component', () => {
  let wrapper, mockProps;

  beforeEach(() => {
    mockProps = {
      collections: [{
        id: 1,
        title: 'hats',
        items: []
      },
      {
        id: 2,
        title: 'shoes',
        items: []
      },
      ]
    }
    wrapper = shallow(<CollectionsOverview {...mockProps} />);
  });

  it('should render CollectionsOverview component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of nested CollectionsPreview as there are passed as props', () => {
    expect(wrapper.find('CollectionsOverviewContainer').children().length).toEqual(mockProps.collections.length);
  })
});
