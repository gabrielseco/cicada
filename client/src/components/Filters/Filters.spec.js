import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filters suite', () => {
  it('renders Filters without any state injected', () => {
    const component = shallow(<Filters />);
    expect(component).toBeDefined();
  });
});
