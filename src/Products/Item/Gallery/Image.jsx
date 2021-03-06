/* @flow */

import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  box-sizing: border-box;
  border: 5px solid transparent;
  border-color: ${(props: { isSelected: boolean }) =>
    (props.isSelected ? '#e7e7e7' : 'transparent')};
  cursor: pointer;
  margin: 0 14px;
  width: 16%;

  &:hover {
    border-color: #e7e7e7;
  }
`;

export default (props: { src: string, isSelected: boolean, onChangeImage: Function }) =>
  <Image src={props.src} isSelected={props.isSelected} onClick={props.onChangeImage} />;
