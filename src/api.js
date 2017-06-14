const baseUrl = 'https://erodionov-adidas-fake-api.now.sh/v1';

export const get = url => fetch(baseUrl + url).then(res => res.json());

export const post = (url, headers) =>
  fetch(baseUrl + url, headers).then(res => res.json());

export const put = (url, headers) =>
  fetch(baseUrl + url, headers).then(res => res.json());

export const del = (url, headers) =>
  fetch(baseUrl + url, headers).then(res => res.json());
