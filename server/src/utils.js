export const transformQueryParams = (arr, key) => {
  return arr.reduce((queryParams, value) => {
    return queryParams + `&${key}=${value}`;
  }, '');
};

export const replaceAmperSand = value => '?' + value.slice(1);
