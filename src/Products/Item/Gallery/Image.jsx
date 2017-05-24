import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 16%;
  box-sizing: border-box;
  border: 5px solid transparent;
  border-color: ${props => (props.isSelected ? '#e7e7e7' : 'transparent')};
  cursor: pointer;
  margin: 0 14px;

  &:hover {
    border-color: #e7e7e7;
  }
`;

export default props => (
  <Image
    src={props.source}
    isSelected={props.isSelected}
    onClick={props.changeImage}
  />
);
