// @flow
import React, { Component } from 'react';
import { Button } from 'components';
import styles from './Filters.scss';

type Props = {
  onSubmit: Function,
  onChange: Function
};

export type FiltersState = {
  type: string,
  sort: string
};

export type OnChangeEvent = {
  value: string,
  key: 'sort' | 'type'
};

class Filters extends Component<Props, FiltersState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      type: 'all',
      sort: 'ascending'
    };
  }

  onChange(evt: { target: { value: string } }, stateKey: string) {
    const value = evt.target.value;
    this.setState(state => {
      return {
        ...state,
        [stateKey]: value
      };
    });
    this.props.onChange({
      value: value,
      key: stateKey
    });
  }

  onSubmit(evt: any) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={evt => this.onSubmit(evt)}>
        <h2 className={styles.title}>Filters</h2>
        <div className={styles.formGroup}>
          <label htmlFor="property-type">Property type:</label>
          <select
            id="property-type"
            value={this.state.type}
            onChange={evt => this.onChange(evt, 'type')}
          >
            <option value="all">All</option>
            <option value="apartaments">Apartaments</option>
            <option value="rooms">Rooms</option>
            <option value="studios">Studios</option>
            <option value="residences">Residences</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="property-sort">Sort by Price: </label>
          <select
            id="property-sort"
            value={this.state.sort}
            onChange={evt => this.onChange(evt, 'sort')}
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <Button type="submit">Download JSON</Button>
        </div>
      </form>
    );
  }
}

export default Filters;
