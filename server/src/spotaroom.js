import request from 'request';
import BASE_URL from './config';
import {
  transformQueryParams,
  replaceAmperSand,
} from './utils';

const LISTINGS_SEARCH_ENDPOINT = '/listings/search';

export const PropertiesById = (req, res) => {
  const city = req.params.city;
  const endpoint = [BASE_URL, LISTINGS_SEARCH_ENDPOINT, `/markers/${city}`].join('');
  request.get(endpoint).pipe(res);
};

export const Properties = (req, res) => {
  const parsedIdsParam = req.query.ids.split(',');
  const queryParams = replaceAmperSand(transformQueryParams(parsedIdsParam, 'ids[]'));
  const endpoint = [BASE_URL, LISTINGS_SEARCH_ENDPOINT, `/homecards_ids${queryParams}`].join('');
  request.get(endpoint).pipe(res);
};
