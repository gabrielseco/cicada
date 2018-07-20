import { transformQueryParams, replaceAmperSand } from './utils';

it('should all parameters with ampersand', () => {
  expect(transformQueryParams([145144, 145154], 'ids[]')).toBe('&ids[]=145144&ids[]=145154');
});

it('should replace ampersand', () => {
  expect(replaceAmperSand(transformQueryParams([145144, 145154], 'ids[]'))).toBe('?ids[]=145144&ids[]=145154');
});

