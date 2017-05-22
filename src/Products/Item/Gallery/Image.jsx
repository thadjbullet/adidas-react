import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 16%;
  box-sizing: border-box;
  border: 5px solid transparent;
  border-color: ${props => (props.activeId === props.id ? '#e7e7e7' : 'transparent')};
  cursor: pointer;
  margin: 0 14px;

  &:hover {
    border-color: #e7e7e7;
  }
`;

export default class GalleruImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeImage(this.props.id, this.props.source);
  }

  render() {
    return (
      <Image
        src={this.props.source}
        activeId={this.props.activeId}
        id={this.props.id}
        onClick={this.handleClick}
      />
    );
  }
}
