import React from 'react';
import { shallow } from 'enzyme';
import PropertyList from './PropertyList';

describe('PropertyList suite', () => {
  it('renders PropertyList without any state injected', () => {
    const component = shallow(<PropertyList properties={[]} />);
    expect(component).toBeDefined();
  });
});
