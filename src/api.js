/* @flow */

const baseUrl = 'https://erodionov-adidas-fake-api.now.sh/v1';

export const get = (url: string) => fetch(baseUrl + url).then(res => res.json());

export const post = (url: string, headers: Object) =>
  fetch(baseUrl + url, headers).then(res => res.json());

export const put = (url: string, headers: Object) =>
  fetch(baseUrl + url, headers).then(res => res.json());

export const del = (url: string, headers: Object) =>
  fetch(baseUrl + url, headers).then(res => res.json());
