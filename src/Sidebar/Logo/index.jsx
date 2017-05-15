/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import meida from '../../media';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 31px auto;

  ${meida.xs('max')`
    display: flex;
    justify-content: start;
    height: 100%;
    margin: 0;
  `}
`;

const Img = styled.img`
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  ${meida.xs('max')`
    height: auto;
    display: block;
    max-width: 52px;
    padding: 0;
  `}
`;

const LogoLink = styled(Link)`
  align-self: center;
`;

export default () => (
  <Logo>
    <LogoLink to="/">
      <Img src={require('./logo.png')} />
    </LogoLink>
  </Logo>
);
