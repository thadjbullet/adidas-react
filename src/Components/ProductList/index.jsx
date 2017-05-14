/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

import Header from './Header';
import Card from './ProductCard';
import CardSale from './ProductCardSale';

const Container = styled.main`
  flex-basis: 66.6667%;
  flex: 1;
`;

const Content = styled.div`
  padding: 22px 25px;
  justify-content: space-between;
`;

export default () => (
  <Container>
    <Header />
    <Content>
      <Row>
        <CardSale image={require('./shue-1.png')} cost="170$" />
        <Card image={require('./shoes.png')} cost="240.99$" />
        <Card image={require('./shue-1.png')} cost="1024$" />
        <Card image={require('./shue-1.png')} cost="170$" />
        <CardSale image={require('./shoes.png')} cost="170$" />
        <Card image={require('./shue-1.png')} cost="170$" />
      </Row>
    </Content>
  </Container>
);
