/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default () => (
  <Container>
    <Img src={require('./loadingImage.gif')} alt="loading" />
  </Container>
);
