/* @flow */
/* global handleClick */

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'AvenirBold';
  font-size: 24px;
  color: ${(props: { id: Number, selectedId: Number }) =>
    (props.id === props.selectedId ? '#4d42f8' : '#d6d6d6')};
  padding: 0 4px;
  text-transform: uppercase;

  &:hover {
    color: #4d42f8;
  }
`;

type Props = {
  selectId: Function,
  id: string,
  selectedId: Number,
  children: string,
};

export default class SizeButton extends React.Component<any, Props, any> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.selectId(this.props.id);
  }
  handleClick: Function;

  render() {
    return (
      <Button
        onClick={this.handleClick}
        selectId={this.props.selectId}
        id={this.props.id}
        selectedId={this.props.selectedId}
      >
        {this.props.children}
      </Button>
    );
  }
}
