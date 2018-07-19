import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('Loading suite', () => {
  it('should render the Loading component', () => {
    const component = shallow(<Loading />);
    expect(component).toBeDefined();
  });
});
