import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filters suite', () => {
  it('renders Filters without any state injected', () => {
    const filters = {
      sort: '',
      type: ''
    };
    const component = shallow(<Filters isLoading filters={filters} />);
    expect(component).toBeDefined();
  });
});
