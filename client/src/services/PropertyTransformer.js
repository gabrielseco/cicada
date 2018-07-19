// @flow

import { PropertyService } from './Property';

export class PropertyTransformer {
  
  async getProperties(city: string, limit = 30) {
    const until = limit - 1;
    const { data : { data } } = await new PropertyService().getPropertiesId(city);
    const ids = data.slice(0, until).map(property => property.id);

    return ids;
  }
}