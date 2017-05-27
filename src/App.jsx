/* @flow */

import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Sidebar from './Sidebar';
import media from './media';
import ProductList from './Products/List';
import ProductItem from './Products/Item';

const View = styled.div`
  display: flex;
  flex-direction: row;

  ${media.sm('max')`
    display: flex;
    flex-direction: column;
  `}
`;

export default () => (
  <Router>
    <View>
      <Route path="/products/:something">
        <Sidebar />
      </Route>
      <Switch>
        <Redirect exact from="/" to="/products/football/shoes" />
        <Route
          exact
          path="/products/:category/:section"
          component={ProductList}
        />
        <Route exact path="/products/:id" component={ProductItem} />
      </Switch>
    </View>
  </Router>
);
