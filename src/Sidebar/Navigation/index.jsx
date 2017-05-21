import React from 'react';
import styled from 'styled-components';

import media from '../../media';
import MenuItem from './MenuItem';

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

export default () => (
  <Nav>
    <MenuItem to="#" isOpen hasSubmenu>Football</MenuItem>
    <MenuItem to="#" hasSubmenu>Running</MenuItem>
    <MenuItem to="#" hasSubmenu>Basketball</MenuItem>
    <MenuItem to="#">Brands</MenuItem>
    <MenuItem to="#">Micoach</MenuItem>
  </Nav>
);
