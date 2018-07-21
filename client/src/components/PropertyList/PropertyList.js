// @flow
import React, { Component } from 'react';
import { PropertyItem } from 'components';
import styles from './PropertyList.scss';
import { type Property } from './../../types/property';

type Props = {
  properties: Property[]
};

type State = {};

class PropertyList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className={styles.container}>
        {this.props.properties.map(property => (
          <PropertyItem key={property.id} property={property} />
        ))}
      </ul>
    );
  }
}

export default PropertyList;
