// @flow
import React, { Component } from 'react';
import styles from './Filters.scss';

type Props = {};
type State = {};

class Filters extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onChange(evt: { target: { value: string } }, stateKey: string) {
    console.log({
      evt: evt.target.value,
      stateKey: stateKey
    });
  }

  onSubmit() {}

  render() {
    return (
      <form onSubmit={() => this.onSubmit}>
        <h2 className={styles.title}>Filters</h2>
        <div className={styles.formGroup}>
          <label htmlFor="property-type">Property type:</label>
          <select
            id="property-type"
            onChange={evt => this.onChange(evt, 'type')}
          >
            <option value="''">All</option>
            <option value="'apartaments'">Apartaments</option>
            <option value="'rooms'">Rooms</option>
            <option value="'studios'">Studios</option>
            <option value="'residences'">Residences</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="property-sort">Sort by Price</label>
          <select
            id="property-sort"
            onChange={evt => this.onChange(evt, 'sort')}
          >
            <option value="'ascending'">Ascending</option>
            <option value="'descending'">Descending</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Download JSON</button>
        </div>
      </form>
    );
  }
}

export default Filters;
