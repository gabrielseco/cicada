// @flow
import React, { Component } from 'react';
import { Header } from 'components';
import { PropertyTransformer } from './../../services/PropertyTransformer';
import { type Property } from './../../types/property';

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
    new PropertyTransformer()
      .getProperties('helsinki')
      .then(properties => {
        this.setState({
          properties: properties
        });
      })
      .catch(err => {
        console.log('err getProperties', err.message);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.properties.map(property => {
          return <h1 key={property.id}>{property.title}</h1>;
        })}
      </React.Fragment>
    );
  }
}

export default Home;
