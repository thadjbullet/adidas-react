import React from 'react';
import styled from 'styled-components';
import media from '../../../media';
import Icon from './HeaderIcon';

const Header = styled.header`
  background: blue;
  border-bottom: 4px solid #e7e7e7;
  align-items: center;
  display: flex;
  padding: 11px 25px;
`;

export default () => (
  <Header>
    <Icon />
  </Header>
);
