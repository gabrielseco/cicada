import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home suite', () => {
  it('renders Home without any state injected', () => {
    const component = shallow(<Home />);
    expect(component).toBeDefined();
  });
});
