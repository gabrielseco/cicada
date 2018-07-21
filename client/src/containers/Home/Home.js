// @flow
import React, { Component } from 'react';
import { Header, Filters, PropertyList } from 'components';
/* import { PropertyTransformer } from './../../services/PropertyTransformer';
 */ import { type Property } from './../../types/property';

type Props = {};

type State = {
  properties: Property[]
};

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  componentDidMount() {
    /* new PropertyTransformer()
      .getProperties('madrid')
      .then(properties => {
        this.setState({
          properties: properties
        });
      })
      .catch(err => {
        console.log('err getProperties', err);
      }); */
  }

  /*
    {this.state.properties.map(property => {
          return (
            <div>
              <h1 key={property.id}>{property.title}</h1>
              <img src={property.photoUrls.homecard} alt={property.title} />
            </div>
          );
    })}
  */

  render() {
    console.log(this.state.properties);
    return (
      <React.Fragment>
        <Header />
        <Filters />
        <PropertyList />
      </React.Fragment>
    );
  }
}

export default Home;
