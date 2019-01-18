import Request from '../../util/request';

export const getData = data => Request({
  url: '/api/getData',
  method: 'GET',
  data,
});
