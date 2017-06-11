import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'AvenirBold';
  font-size: 24px;
  color: ${props => (props.id === props.selectedId ? '#4d42f8' : '#d6d6d6')};
  padding: 0 4px;
  text-transform: uppercase;

  &:hover {
    color: #4d42f8;
  }
`;

export default class SizeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.isSelected(this.props.id);
  }

  render() {
    return (
      <Button
        onClick={this.handleClick}
        isSelected={this.props.isSelected}
        id={this.props.id}
      >
        {this.props.children}
      </Button>
    );
  }
}
