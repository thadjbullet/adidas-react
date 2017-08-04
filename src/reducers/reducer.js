/* @flow */
/* eslint-disable no-console */

import { createStore } from 'redux';
import {
  ADD_SEARCH_VALUE,
  TOGGLE_MOBILE_MENU,
  TOGGLE_DESKTOP_SUBMENU,
  FETCH_DATA,
} from '../actions';

const initialState = {
  searchValue: '',
  mobileMenu: false,
  desktopMenu: false,
  productList: [],
};

type InitialState = {
  searchValue: string,
  mobileMenu: boolean,
  desktopMenu: boolean,
  productList: Array<Object>,
};

const adidasApp = (
  state = (initialState: InitialState),
  action: { type: string, value: string | boolean },
): Object => {
  switch (action.type) {
    case ADD_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case TOGGLE_MOBILE_MENU:
      return { ...state, mobileMenu: action.value };
    case TOGGLE_DESKTOP_SUBMENU:
      return { ...state, desktopMenu: action.value };
    case FETCH_DATA:
      return { ...state, productList: action.value };
    default:
      return state;
  }
};
