import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
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

  &:hover {
    color: #fff;
  }
`;

export default () => (
  <nav>
    <Link to="#">Shoes</Link>
    <Link to="#">Clothing</Link>
    <Link to="#">Accesories</Link>
  </nav>
);
