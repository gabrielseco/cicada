import request from 'request';
import BASE_URL from './config';

const LISTINGS_SEARCH_ENDPOINT = '/listings/search';

export const PropertiesById = (req, res) => {
  const city = req.params.city;
  const endpoint = [BASE_URL, LISTINGS_SEARCH_ENDPOINT, `/markers/${city}`].join('');
  request.get(endpoint).pipe(res);
};


export const Properties = (req, res) => {
  const endpoint = `${BASE_URL}/listings/search/markers/madrid`; // Todo: pass the ids
  request.get(endpoint).pipe(res);
};
