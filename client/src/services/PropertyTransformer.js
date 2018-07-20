// @flow

import { PropertyService } from './Property';

export class PropertyTransformer {
  async getProperties(city: string, limit: number = 30) {
    const from = 0;
    const until = limit - 1;
    try {
      const {
        data: { data }
      } = await new PropertyService().getPropertiesId(city);
      const ids = data.slice(from, until).map(property => property.id);
      return ids;
    } catch (err) {
      console.log('err getting ids', err);
      return err;
    }
  }
}
