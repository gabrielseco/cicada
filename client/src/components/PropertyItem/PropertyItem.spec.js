import React from 'react';
import { shallow } from 'enzyme';

import PropertyItem from './PropertyItem';

describe('PropertyItem suite', () => {
  it('should render the PropertyItem component', () => {
    const component = shallow(<PropertyItem />);
    expect(component).toBeDefined();
  });
});
