const baseUrl = 'https://erodionov-adidas-fake-api.now.sh/v1';

export default url =>
  fetch(baseUrl + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
      Accept: '*/*',
      'Access-Control-Allow-Origin': 'http://kserebryansky-adidas-shop.now.sh',
    },
    mode: 'cors',
  }).then(res => res.json());
