/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 16%;
  box-sizing: border-box;
  outline-color: #fff;
  outline: ${props => (props.sel ? '5px solid #e7e7e7' : '')};
  cursor: pointer;
  margin: 0 14px;

  &:hover {
    outline: 5px solid #e7e7e7;
  }
`;

export default props => <Image src={props.source} sel={props.sel} />;
