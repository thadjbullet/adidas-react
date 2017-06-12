const baseUrl = 'https://erodionov-adidas-fake-api.now.sh/v1';

export const get = url => fetch(baseUrl + url);

export const post = (url, headers) => fetch(baseUrl + url, headers);

export const put = (url, headers) => fetch(baseUrl + url, headers);

export const del = (url, headers) => fetch(baseUrl + url, headers);
