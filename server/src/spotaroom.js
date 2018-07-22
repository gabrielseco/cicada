import request from 'request';
import BASE_URL from './config';
import {
  transformQueryParams,
  replaceAmperSand,
} from './utils';

const LISTINGS_SEARCH_ENDPOINT = '/listings/search';

const getPropertiesByIdParams = (req) => {
  const ALL_TYPE = 'all';
  const city = req.params.city;
  const typeQuery = req.query.type;
  const typeParam = typeQuery !== ALL_TYPE ? replaceAmperSand(transformQueryParams([typeQuery], 'type[]')) : '';

  return {
    city,
    type: typeParam,
  };
};

const getPropertiesParams = (req) => {
  const parsedIdsParam = req.query.ids.split(',');
  const ids = replaceAmperSand(transformQueryParams(parsedIdsParam, 'ids[]'));
  return {
    ids,
  };
};

export const PropertiesById = (req, res) => {
  const { city, type } = getPropertiesByIdParams(req);
  const endpoint = [BASE_URL, LISTINGS_SEARCH_ENDPOINT, `/markers/${city}${type}`].join('');
  request.get(endpoint).pipe(res);
};

export const Properties = (req, res) => {
  const { ids } = getPropertiesParams(req);
  const endpoint = [BASE_URL, LISTINGS_SEARCH_ENDPOINT, `/homecards_ids${ids}`].join('');
  request.get(endpoint).pipe(res);
};
