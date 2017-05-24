import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.color};
  border: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 13px;
  z-index: 10;

  &:hover {
    transform: scale(1.2);
  }
`;

export default props => (
  <Button
    color={props.color}
    onClick={() => props.onChangeColor(props.color)}
  />
);
