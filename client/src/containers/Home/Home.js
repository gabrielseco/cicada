// @flow
import React, { Component } from 'react';
import { Header, Filters, PropertyList } from 'components';
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
      .getProperties('madrid')
      .then(properties => {
        this.setState({
          properties: properties
        });
      })
      .catch(err => {
        console.log('err getProperties', err);
      });
  }

  onChange(evt: any) {
    console.log('onchange', evt);
  }

  onSubmit(evt: any) {
    console.log('submit', evt);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Filters
          onChange={evt => this.onChange(evt)}
          onSubmit={evt => this.onSubmit(evt)}
        />
        <PropertyList properties={this.state.properties} />
      </React.Fragment>
    );
  }
}

export default Home;
