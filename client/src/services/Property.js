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
}
