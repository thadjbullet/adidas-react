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
    flex-direction: row;
    justify-content: space-between;
    padding: 17px 0;
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

const HamburgerIcon = styled.img`
  display: none;
  ${meida.xs('max')`
    align-self: center;
    cursor: pointer;
    display: block;
    max-height: 30px;

    &:hover {
      color: #4d42f8;
    }
  `}
`;

export default props => (
  <Logo>
    <LogoLink to="/">
      <Img src={require('./logo.svg')} />
    </LogoLink>
    <HamburgerIcon
      onClick={props.handleOpenMenu}
      src={
        props.isMenuOpen ? require('./close.svg') : require('./hamburger.svg')
      }
    />
  </Logo>
);
