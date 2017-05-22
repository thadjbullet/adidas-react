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

export default class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.props.changeColor(this.props.color);
  }

  render() {
    return <Button color={this.props.color} onClick={this.changeColor} />;
  }
}
