// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Filters, PropertyList } from 'components';
import { PropertyTransformer } from './../../services/PropertyTransformer';
import { type Property } from './../../types/property';
import {
  type OnChangeEvent,
  type FiltersState
} from './../../components/Filters/Filters';
import { PropertyService } from '../../services/Property';
import styles from './Home.scss';

type Props = {
  history: {
    push: Function,
    listen: Function
  }
};

type State = {
  city: string,
  properties: Property[],
  filters: {
    sort: string,
    type: string
  },
  totalProperties: number
};

const PropertyTransformerFactory = args => {
  return new PropertyTransformer().getProperties(args);
};

const sortPropertiesFactory = (properties: Property[], sort: string) => {
  return new PropertyService().sortProperties(properties, sort);
};

class Home extends Component<Props, State> {
  unlisten: Function;
  constructor(props: Props) {
    super(props);
    this.state = {
      city: 'madrid',
      properties: [],
      filters: {
        sort: 'ascending',
        type: 'all'
      },
      totalProperties: 0
    };
  }

  componentDidMount() {
    this.props.history.push(`#${this.state.city}`);
    this.unlisten = this.props.history.listen(location => {
      const city = location.hash.slice(1);
      this.setState(state => ({
        ...state,
        city: city
      }));
      this.getProperties({ city, type: this.state.filters.type });
    });
    this.getProperties({
      city: this.state.city,
      type: this.state.filters.type
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getProperties({ city, type }) {
    PropertyTransformerFactory({
      city: city,
      type: type
    })
      .then(({ properties, total }) =>
        this.updateProperties({ properties, total })
      )
      .catch(error => this.logError(error));
  }

  onChange(evt: OnChangeEvent) {
    const SORT = 'sort';
    const TYPE = 'type';

    if (evt.key === SORT) {
      this.updateFromSortFilter({
        properties: this.state.properties,
        sort: evt.value
      });
    }

    if (evt.key === TYPE) {
      this.updateFromTypeFilter({
        city: this.state.city,
        type: evt.value
      });
    }
  }

  updateFromSortFilter({ properties, sort }) {
    this.setState(state => ({
      ...state,
      properties: sortPropertiesFactory(properties, sort),
      filters: {
        ...state.filters,
        sort: sort
      }
    }));
  }

  updateFromTypeFilter({ city, type }) {
    this.setState(state => ({
      ...state,
      filters: {
        ...state.filters,
        type: type
      }
    }));

    this.getProperties({
      city: city,
      type: type
    });
  }

  updateProperties({ properties, total }) {
    this.setState(state => ({
      ...state,
      totalProperties: total,
      properties: sortPropertiesFactory(properties, this.state.filters.sort)
    }));
  }

  logError(err) {
    console.log('err updating properties', err);
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
              isLoading={this.state.properties.length === 0}
              filters={this.state.filters}
              onChange={evt => this.onChange(evt)}
              onSubmit={evt => this.onSubmit(evt)}
            />
          </div>
          <div className={styles.propertyListContainer}>
            <span>Total: {this.state.totalProperties}</span>
            <PropertyList properties={this.state.properties} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
