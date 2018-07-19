import React from 'react';
import { shallow } from 'enzyme';

import DrawerNav from './DrawerNav';

describe('DrawerNav suite', () => {
  it('should render the DrawerNav component', () => {
    const component = shallow(<DrawerNav />);
    expect(component).toBeDefined();
  });
});
