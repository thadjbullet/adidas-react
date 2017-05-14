import React from 'react';
import styled from 'styled-components';
// import media from '../../../media';
import Icon from './HeaderIcon';
import Gender from './Gender';
import Size from './Size';

const Header = styled.header`
  border-bottom: 4px solid #e7e7e7;
  align-items: center;
  display: flex;
  padding: 11px 25px;
`;

export default () => (
  <Header>
    <Icon />
    <Gender />
    <Size />
  </Header>
);
