/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import Header from './Header';
import Card from './Card';
import CardSale from './CardSale';

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
        <Col xs={12} sm={6} ms={4} lg={4}>
          <CardSale image={require('./shue-1.png')} cost="170$" />
        </Col>
        <Col xs={12} sm={6} ms={4} lg={4}>
          <Card image={require('./shoes.png')} cost="240.99$" />
        </Col>
        <Col xs={12} sm={6} ms={4} lg={4}>
          <Card image={require('./shue-1.png')} cost="1024$" />
        </Col>
        <Col xs={12} sm={6} ms={4} lg={4}>
          <Card image={require('./shue-1.png')} cost="170$" />
        </Col>
        <Col xs={12} sm={6} ms={4} lg={4}>
          <CardSale image={require('./shoes.png')} cost="170$" />
        </Col>
        <Col xs={12} sm={6} ms={4} lg={4}>
          <Card image={require('./shue-1.png')} cost="170$" />
        </Col>
      </Row>
    </Content>
  </Container>
);
