import React from 'react';
import styled from 'styled-components';
import media from '../../../../media';

const logo = require('./filter@3x.png');

const Div = styled.div`
  display: flex;
  background: #ebebeb;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;

  ${media.xs('max')`
    display: none;
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
