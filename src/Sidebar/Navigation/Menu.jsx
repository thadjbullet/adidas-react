import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: ${props => (props.isOpen ? '#fff' : '#3c3c3c')};
  cursor: pointer;
  display: flex;
  font-family: 'AvenirBold';
  justify-content: center;
  padding: 13px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }

  ${props => props.hasSubmenu && `
  &:after {
    align-self: center;
    content: '';
    display: flex;
    width: 6px;
    height: 6px;
    border: 3px solid ${props.isOpen ? '#fff' : '#3c3c3c'};
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: ${props.isOpen ? 'rotate(45deg)' : 'rotate(225deg)'};
    margin-left: 12px;
    transition-duration: 0.3s;
  }
    &:hover:after {
      border-color: #fff;
    }
`}
`;

const Wrapper = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Title
          onClick={this.handleOnClick}
          hasSubmenu={this.props.hasSubmenu}
          isOpen={this.state.isOpen}
        >
          {this.props.title}
        </Title>
        <Wrapper isOpen={this.state.isOpen}>
          {this.props.children}
        </Wrapper>
      </div>
    );
  }
}
