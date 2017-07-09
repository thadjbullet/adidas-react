/* @flow */

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import media from '../../media';
import Menu from './Menu';

const Nav = styled.nav`
  align-items: flex-start;
  display: ${(props: { isMenuOpened: boolean }) => (props.isMenuOpened ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 24px;

  ${media.sm('min')`
    display: block;
    align-self: center;
    font-size: 24px;
    padding-top: 148px;
    text-align: center;
  `};
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

const LinkWithActive = ({ to, children }: { to: string, children: string }) =>
  (<Link to={to} activeClassName="active">
    {children}
  </Link>);

export default (props: { isMenuOpened: boolean }) =>
  (<Nav isMenuOpened={props.isMenuOpened}>
    <Menu title="football">
      <LinkWithActive to="/products/football/cleats">cleats</LinkWithActive>
      <LinkWithActive to="/products/football/apparel">apparel</LinkWithActive>
      <LinkWithActive to="/products/football/accessories">accessories</LinkWithActive>
    </Menu>
    <Menu title="running">
      <LinkWithActive to="/products/running/shoes">shoes</LinkWithActive>
      <LinkWithActive to="/products/running/apparel">apparel</LinkWithActive>
      <LinkWithActive to="/products/running/accessories">accessories</LinkWithActive>
    </Menu>
    <Menu title="basketball">
      <LinkWithActive to="/products/basketball/shoes">shoes</LinkWithActive>
      <LinkWithActive to="/products/basketball/apparel">apparel</LinkWithActive>
      <LinkWithActive to="/products/basketball/accessories">accessories</LinkWithActive>
    </Menu>
  </Nav>);
