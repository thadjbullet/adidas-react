import React from 'react';
import styled from 'styled-components';
// import media from '../../media';
import Header from './Header';

const Container = styled.main`
  flex-basis: 66.6667%;
  flex: 1;
`;

export default () => (
  <Container>
    <Header />
  </Container>
);
