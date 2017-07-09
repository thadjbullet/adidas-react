/* @flow */

import { createStore } from 'redux';

const filter = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return state + action.filter;
    case 'RESET_FILTER':
      return state;
    default:
      return state;
  }
};

const store = createStore(filter);

console.log('initial store: ', store.getState());

store.dispatch({ type: 'SET_FILTER', filter: '7' });

console.log('modified store: ', store.getState());
