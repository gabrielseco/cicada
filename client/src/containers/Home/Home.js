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
import styles from './Home.scss';

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
      .getProperties({
        city: 'madrid'
      })
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
      new PropertyTransformer()
        .getProperties({
          city: 'madrid',
          type: evt.value
        })
        .then(properties => {
          const sortProperties = new PropertyService().sortProperties(
            properties,
            'ascending'
          );

          this.setState({
            properties: sortProperties
          });
        });
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
        <div className={styles.wrapper}>
          <div className={styles.filterContainer}>
            <Filters
              onChange={evt => this.onChange(evt)}
              onSubmit={evt => this.onSubmit(evt)}
            />
          </div>
          <div className={styles.propertyListContainer}>
            <PropertyList properties={this.state.properties} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
