// @flow

import { PropertyService } from './Property';

export class PropertyTransformer {
  propertyService: PropertyService;

  constructor() {
    this.propertyService = new PropertyService();
  }

  async getProperties(city: string, limit: number = 30) {
    const from = 0;
    const until = limit - 1;
    try {
      const {
        data: { data : resultIds }
      } = await this.propertyService.getPropertiesId(city);
      const ids = resultIds.slice(from, until).map(property => property.id);
      try {
        const {
          data: { data: { homecards: properties} }
        } = await this.propertyService.getProperties(ids);
        return properties;
      } catch(errProperties) {
        console.log(errProperties)
      }
      
    } catch (err) {
      console.log('err getting ids', err);
      return err;
    }
  }
}
