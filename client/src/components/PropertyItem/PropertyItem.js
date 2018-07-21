// @flow
import React from 'react';
import { Button } from 'components';
import styles from './PropertyItem.scss';
import { type Property } from './../../types/property';

const PropertyItem = ({ property }: { property: Property }) => (
  <li className={styles.propertyItem}>
    <img src={property.photoUrls.homecard} alt={property.title} />
    <h2 className={styles.title}>{property.title}</h2>
    <div className={styles.priceContainer}>
      <span className={styles.price}>{property.pricePerMonth}€</span>
    </div>
    <div className={styles.buttonActions}>
      <Button type="button">More Details</Button>
      <Button type="button" secondary>
        Book Now
      </Button>
    </div>
  </li>
);

export default PropertyItem;
