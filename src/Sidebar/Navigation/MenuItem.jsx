import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SubNav from './SubNav/index';

const Link = styled(NavLink)`
  color: ${props => (props.isOpen ? '#fff' : '#3c3c3c')};
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

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Link
          to={this.props.to}
          isOpen={this.state.isOpen}
          hasSubmenu={this.props.hasSubmenu}
          onClick={this.handleOnClick}
        >
          {this.props.children}
        </Link>
        <SubNav isOpen={this.state.isOpen} hasSubmenu={this.props.hasSubmenu} />
      </div>
    );
  }
}
