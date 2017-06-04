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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.selectButton(this.props.id);
  }

  render() {
    return (
      <Button
        onClick={this.handleOnClick}
        selectedId={this.props.selectedId}
        id={this.props.id}
      >
        {this.props.children}
      </Button>
    );
  }
}
