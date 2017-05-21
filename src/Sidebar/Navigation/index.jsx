import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import media from '../../media';
import Menu from './Menu';

const Nav = styled.nav`
  display: none;

  ${media.xs('min')`
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
`;

export default () => (
  <Nav>
    <Menu title="football" hasSubmenu>
      <Link to="/football/shoes">shoes</Link>
      <Link to="/football/clothing">
        clothing
      </Link>
      <Link to="/football/accesories">
        accesories
      </Link>
    </Menu>
    <Menu title="running" hasSubmenu>
      <Link to="/running/shoes">shoes</Link>
      <Link to="/running/clothing">
        clothing
      </Link>
      <Link to="/running/accesories">
        accesories
      </Link>
    </Menu>
    <Menu title="basketball" hasSubmenu>
      <Link to="/basketball/shoes">shoes</Link>
      <Link to="/basketball/clothing">
        clothing
      </Link>
      <Link to="/basketball/accesories">
        accesories
      </Link>
    </Menu>
    <Menu title="brands" />
    <Menu title="micoach" />
  </Nav>
);
