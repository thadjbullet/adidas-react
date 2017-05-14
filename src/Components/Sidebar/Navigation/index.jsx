import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../../media';
import SuvNav from './SubNav';

const Nav = styled.nav`
  align-self: center;
  font-size: 24px;
  padding-top: 148px;
  text-align: center;

  ${media.xs('max')`
    display: none;
  `}
`;

const MenuLink = styled(Link)`
  color: #3c3c3c;
  display: flex;
  font-family: 'AvenirBold';
  justify-content: center;
  padding: 13px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }

  &:first-child {
    color: #fff;
  }

  &:first-child:after {
    align-self: center;
    content: '';
    display: flex;
    width: 6px;
    height: 6px;
    border: 3px solid #fff;
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: rotate(45deg);
    margin-left: 12px;
    transition-duration: 0.5s;
  }

  &:first-child:hover:after {
    transform: rotate(-135deg);
  }
`;

export default () => (
  <Nav>
    <MenuLink to="#">Shoes</MenuLink>
    <SuvNav />
    <MenuLink to="#">Brands</MenuLink>
    <MenuLink to="#">Micoach</MenuLink>
  </Nav>
);
