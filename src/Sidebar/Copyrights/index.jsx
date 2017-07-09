/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from '../../media';

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;

  ${media.sm('max')`
    z-index: -1;
  `};
`;

const Copyright = styled(Link)`
  color: #fff;
  font-family: 'AvenirBold';
  margin: 0 auto;
  text-decoration: none;
`;

export default () =>
  (<Container>
    <Copyright to="/copyright">©Copyrights</Copyright>
  </Container>);
