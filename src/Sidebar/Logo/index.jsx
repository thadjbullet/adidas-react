/* @flow */
/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '../../media';
import hamburgerIcon from './hamburger.svg';
import closeIcon from './close.svg';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 31px auto;

  ${media.sm('max')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 17px 0;
    margin: 0;
  `};
`;

const Img = styled.img`
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  ${media.sm('max')`
    height: auto;
    display: block;
    max-width: 52px;
    padding: 0;
  `};
`;

const LogoLink = styled(Link)`
  align-self: center;
`;

const HamburgerButton = styled.button`
  display: none;
  ${media.sm('max')`
    align-self: center;
    background-color: transparent;
    background-image: ${(props: Object) =>
    (props.isMenuOpened ? `url(${closeIcon})` : `url(${hamburgerIcon})`)};
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    display: block;
    height: 30px;
    max-height: 30px;
    margin-right: 14px;
    width: 40px;

    &:hover {
      color: #4d42f8;
    }
  `};
`;

export default (props: { isMenuOpened: boolean, handleClick: Function }) =>
  (<Logo>
    <LogoLink to="/">
      <Img src={require('./logo.svg')} />
    </LogoLink>
    <HamburgerButton onClick={props.handleClick} isMenuOpened={props.isMenuOpened} />
  </Logo>);
