import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../../../media';

const logo = require('./filter@3x.png');

const Div = styled.div`
  display: flex;
  background: #ebebeb;
  height: 55px;
  width: 55px;
`;

const Img = styled.img`
  wi
`;
export default () => (
  <Div>
    <Img src={logo} />
  </Div>
);
