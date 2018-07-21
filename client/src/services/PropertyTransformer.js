// @flow

import { PropertyService } from './Property';
import { type Property } from './../types/property';

export class PropertyTransformer {
  propertyService: PropertyService;

  constructor() {
    this.propertyService = new PropertyService();
  }

  getProperties(city: string, limit: number = 30): Promise<Property[]> {
    return new Promise((resolve, reject) => {
      this._getPropertiesIds(city, limit)
        .then(ids => {
          this._getProperties(ids)
            .then(properties => resolve(properties))
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  _getPropertiesIds(city: string, limit: number): Promise<number[]> {
    const from = 0;
    const until = limit - 1;
    return this.propertyService
      .getPropertiesId(city)
      .then(({ data: { data: ids } }) => {
        return ids.slice(from, until).map(property => property.id);
      })
      .catch(err => err);
  }

  _getProperties(ids: number[]): Promise<Property[]> {
    return this.propertyService
      .getProperties(ids)
      .then(
        ({
          data: {
            data: { homecards: properties }
          }
        }) => properties
      )
      .catch(err => err);
  }
}
