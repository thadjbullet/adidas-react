/* @flow */

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import media from './media';
import ProductList from './Products/List';
import ProductItem from './Products/Item';

const View = styled.div`
  display: flex;
  flex-direction: row;

  ${media.xs('max')`
    display: flex;
    flex-direction: column;
  `}
`;

export default () => (
  <Router>
    <View>
      <Sidebar />
      <Route exact path="/" component={ProductList} />
      <Route path="/products" component={ProductItem} />
    </View>
  </Router>
);
