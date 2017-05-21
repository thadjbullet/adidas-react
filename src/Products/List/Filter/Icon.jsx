import React from 'react';
import styled from 'styled-components';

import media from '../../../media';

const logo = require('./filter@3x.png');

const Div = styled.div`
  display: none;

  ${media.lg('min')`
    display: flex;
    background: #ebebeb;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 55px;
  `}
`;

const Img = styled.img`
  width: 40px;
  height: 33px;
`;
export default () => (
  <Div>
    <Img src={logo} />
  </Div>
);
