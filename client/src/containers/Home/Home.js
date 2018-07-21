// @flow
import React, { Component } from 'react';
import { Header, Filters, PropertyList } from 'components';
import { PropertyTransformer } from './../../services/PropertyTransformer';
import { type Property } from './../../types/property';
import {
  type OnChangeEvent,
  type FiltersState
} from './../../components/Filters/Filters';
import { PropertyService } from '../../services/Property';

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
          properties: new PropertyService().sortProperties(
            properties,
            'ascending'
          )
        });
      })
      .catch(err => {
        console.log('err getProperties', err);
      });
  }

  onChange(evt: OnChangeEvent) {
    if (evt.key === 'sort') {
      const properties = new PropertyService().sortProperties(
        this.state.properties,
        evt.value
      );
      this.setState({
        properties: properties
      });
    }

    if (evt.key === 'type') {
      // TODO sort by type
    }
  }

  onSubmit(evt: FiltersState) {
    new PropertyService().downloadPayload({
      filters: evt,
      properties: this.state.properties
    });
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
