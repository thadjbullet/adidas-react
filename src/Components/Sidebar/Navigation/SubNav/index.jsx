import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  
`;

const MenuLink = styled(Link)`
  color: #3c3c3c;
  display: flex;
  justify-content: center;
  font-family: 'AndaleMono';
  padding: 11px 0;
  text-decoration: none;
  text-transform: uppercase;

  &:last-child {
    padding-bottom: 34px;
  }

  &:first-child {
    color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;

export default () => (
  <Nav>
    <MenuLink to="#">Shoes</MenuLink>
    <MenuLink to="#">Clothing</MenuLink>
    <MenuLink to="#">Accesories</MenuLink>
  </Nav>
);
