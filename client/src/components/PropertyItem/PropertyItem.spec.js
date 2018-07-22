import React from 'react';
import { shallow } from 'enzyme';

import PropertyItem from './PropertyItem';

describe('PropertyItem suite', () => {
  it('should render the PropertyItem component', () => {
    const property = {
      id: 80800,
      title: 'Great room in 5-bedroom apartment in Embajadores, Madrid',
      pricePerMonth: 450,
      photoUrls: {
        homecard:
          'https://sah-staging-photos-resized.s3-eu-west-1.amazonaws.com/pt_320_240/0345f17df96f3378443e871a25d88275755f2be105555c1f4e23650c.jpg'
      }
    };
    const component = shallow(<PropertyItem property={property} />);
    expect(component).toBeDefined();
  });
});
