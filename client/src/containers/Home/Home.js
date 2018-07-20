// @flow
import React, { Component } from 'react';
import { Header } from 'components';
import { PropertyTransformer } from './../../services/PropertyTransformer';

type Props = {};

type State = {
  properties: []
}

class Home extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
  }

  componentDidMount() {
    new PropertyTransformer().getProperties('madrid').then(properties => {
      this.setState({
        properties: properties
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.properties.map(property => {
          return <h1>{property.title}</h1>
        })}
      </React.Fragment>
    );
  }
}

export default Home;
