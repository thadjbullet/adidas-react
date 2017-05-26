import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import media from '../../media';
import Menu from './Menu';

const Nav = styled.nav`
  display: ${props => (props.isMenuOpened ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 24px;

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

  &.${props => props.activeClassName} {
    color: #fff;
  }
`;

export default props => (
  <Nav isMenuOpened={props.isMenuOpened}>
    <Menu title="football">
      <Link to="/products/football/shoes" activeClassName>
        shoes
      </Link>
      <Link to="/products/football/clothing" activeClassName>
        clothing
      </Link>
      <Link to="/products/football/accesories" activeClassName>
        accesories
      </Link>
    </Menu>
    <Menu title="running">
      <Link to="/products/running/shoes" activeClassName>
        shoes
      </Link>
      <Link to="/products/running/clothing" activeClassName>
        clothing
      </Link>
      <Link to="/products/running/accesories" activeClassName>
        accesories
      </Link>
    </Menu>
    <Menu title="basketball">
      <Link to="/products/basketball/shoes" activeClassName>
        shoes
      </Link>
      <Link to="/products/basketball/clothing" activeClassName>
        clothing
      </Link>
      <Link to="/products/basketball/accesories" activeClassName>
        accesories
      </Link>
    </Menu>
  </Nav>
);
