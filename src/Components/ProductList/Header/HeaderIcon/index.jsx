import React, {Component} from 'react';
import styled from 'styled-components';
import media from '../../../../media.js';

const Div = styled.div`
  display: flex;
  background: #ebebeb;
  height: 55px;
  width: 55px;
`;

const Img = styled.img`

`;
export default () => {
  return (
    <Div>
      <Img src={require('./filter@3x.png')} />
    </Div>
  );
};
