import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button suite', () => {
  it('should render the Button component', () => {
    const component = shallow(<Button />);
    expect(component).toBeDefined();
  });
});
