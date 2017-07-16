/* @ flow */

import React from 'react';
import styled from 'styled-components';

import media from '../../../media';
import Icon from './Icon';
import Gender from './FilterGender';
import Size from './FilterSize';

const Header = styled.header`
  border-bottom: 4px solid #e7e7e7;
  align-items: center;
  display: flex;
  padding: 11px 25px;

  ${media.xs('max')`
    align-items: flex-start;
    flex-direction: column;
    padding: 15px 0 15px 20px;
  `} ${media.sm('max')`
    align-items: flex-start;
    flex-direction: column;
    padding: 15px 0 15px 20px;
  `};
`;

export default ({
  sizes,
  handleChooseFilter,
  }: {
  sizes: Array<string>,
  handleChooseFilter: Function,
}) =>
  (<Header>
    <Icon />
    <Gender />
    <Size sizes={sizes} handleChooseFilter={handleChooseFilter} />
  </Header>);
