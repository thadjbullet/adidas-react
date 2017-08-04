/* @flow */

export const ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE';
export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';
export const TOGGLE_DESKTOP_SUBMENU = 'TOGGLE_DESKTOP_SUBMENU';
export const FETCH_DATA = 'FETCH_DATA';

export const searchValue = (value: string) => ({
  type: ADD_SEARCH_VALUE,
  value,
});

export const toggleMobileMenu = (index: boolean) => ({
  type: TOGGLE_MOBILE_MENU,
  value: index,
});

export const toggleDesktopSubmenu = (index: boolean) => ({
  type: TOGGLE_DESKTOP_SUBMENU,
  value: index,
});

export const fetchData = (url: string) => ({
  type: FETCH_DATA,
  value: url,
});
