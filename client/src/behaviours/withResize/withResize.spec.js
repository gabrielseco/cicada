import React from 'react';
import { shallow } from 'enzyme';
import withResize from './withResize';

describe('withResize suite', () => {
  it('renders withResize without any state injected', () => {
    const component = shallow(<withResize />);
    expect(component).toBeDefined();
  });
});
