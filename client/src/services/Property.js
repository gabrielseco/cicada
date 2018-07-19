// @flow
import { HttpClient } from 'adapters/HttpClient';
import { BASE_URL } from 'config';
import { type AxiosPromise } from 'axios';

type Response<T> = {
  ok: boolean;
  data: T
}

type PropertiesId = {
  id: number;
}

export class PropertyService {
  httpClient: HttpClient;
  endpoint: string;
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
  }

  getPropertiesId(city: string): AxiosPromise<Response<PropertiesId>> {
    return this.httpClient.get(`/properties-by-id/${city}`);
  }

  getProperties(ids: number[]): AxiosPromise<Response<PropertiesId>> {
    console.log('ids', ids);
  }

}