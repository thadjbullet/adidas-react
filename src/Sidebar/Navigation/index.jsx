/* eslint-disable no-bitwise */

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import media from '../../media';
import Menu from './Menu';

const Nav = styled.nav`
  align-items: flex-start;
  display: ${props => (props.isMenuOpened ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 24px;

  ${media.sm('min')`
    display: block;
    align-self: center;
    font-size: 24px;
    padding-top: 148px;
    text-align: center;
  `}
`;

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

  &.active {
    color: #fff;
  }

  ${media.sm('max')`
    margin-left: 30px;
  `}
`;

const LinkWithActive = ({ to, children }) => (
  <Link to={to} activeClassName="active">{children}</Link>
);

export default props => (
  <Nav isMenuOpened={props.isMenuOpened}>
    <Menu title="football">
      <LinkWithActive to="/products/football/shoes">
        shoes
      </LinkWithActive>
      <LinkWithActive to="/products/football/clothing">
        clothing
      </LinkWithActive>
      <LinkWithActive to="/products/football/accesories">
        accesories
      </LinkWithActive>
    </Menu>
    <Menu title="running">
      <LinkWithActive to="/products/running/shoes">
        shoes
      </LinkWithActive>
      <LinkWithActive to="/products/running/clothing">
        clothing
      </LinkWithActive>
      <LinkWithActive to="/products/running/accesories">
        accesories
      </LinkWithActive>
    </Menu>
    <Menu title="basketball">
      <LinkWithActive to="/products/basketball/shoes">
        shoes
      </LinkWithActive>
      <LinkWithActive to="/products/basketball/clothing">
        clothing
      </LinkWithActive>
      <LinkWithActive to="/products/basketball/accesories">
        accesories
      </LinkWithActive>
    </Menu>
  </Nav>
);
