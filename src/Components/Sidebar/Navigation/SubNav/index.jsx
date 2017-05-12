import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  
`;

const Link = styled.a`
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

export default () => {
  return (
    <Nav>
      <Link href="#">Shoes</Link>
      <Link href="#">Clothing</Link>
      <Link href="#">Accesories</Link>
    </Nav>
  );
};
