// @flow
import { HttpClient } from 'adapters/HttpClient';
import { BASE_URL } from 'config';
import { type AxiosPromise } from 'axios';
import { type Property } from './../types/property';

type Response<T> = {
  ok: boolean,
  data: T
};

type PropertyId = {
  id: number
};

export class PropertyService {
  httpClient: HttpClient;
  endpoint: string;
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
  }

  getPropertiesId(city: string): AxiosPromise<Response<PropertyId>> {
    return this.httpClient.get(`/properties-by-id/${city}`);
  }

  getProperties(ids: number[]): AxiosPromise<Response<Property[]>> {
    const newIds = ids.join(',');
    return this.httpClient.get(`/properties?ids=${newIds}`);
  }

  sortProperties(properties: Property[], by: string): Property[] {
    return properties.sort((a, b) => {
      return by === 'descending'
        ? b.pricePerMonth - a.pricePerMonth
        : a.pricePerMonth - b.pricePerMonth;
    });
  }

  downloadPayload(payload: any) {
    /* eslint-disable */
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(payload, null, 4));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute(
      'download',
      Math.random().toString(8) + '.json'
    );
    /* eslint-enable */
    (document: any).body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
