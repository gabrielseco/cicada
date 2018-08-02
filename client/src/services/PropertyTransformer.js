// @flow

import { PropertyService } from './Property';
import { type Property } from './../types/property';

export class PropertyTransformer {
  propertyService: PropertyService;

  constructor() {
    this.propertyService = new PropertyService();
  }

  getProperties({
    city,
    type,
    limit = 30
  }: {
    city: string,
    type?: string,
    limit?: number
  }): Promise<{ properties: Property[], total: number }> {
    return new Promise((resolve, reject) => {
      this._getPropertiesIds({
        city: city,
        type: type,
        limit: limit
      })
        .then(({ ids, total }) => {
          this._getProperties(ids)
            .then(properties =>
              resolve({
                properties: properties,
                total: total
              })
            )
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  _getPropertiesIds({
    city,
    type,
    limit
  }: {
    city: string,
    type?: string,
    limit: number
  }): Promise<{ ids: number[], total: number }> {
    const from = 0;
    return this.propertyService
      .getPropertiesId({ city: city, type: type })
      .then(({ data: { data: ids } }) => {
        return {
          ids: ids.slice(from, limit).map(property => property.id),
          total: ids.length
        };
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
