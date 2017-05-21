import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
      transform: rotate(225deg);
      margin-left: 12px;
      transition-duration: 0.3s;
    }
     &:hover:after {
       border-color: #fff;
     }
  `}

  ${props => props.hasSubmenu && props.isOpen && `
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
      transform: rotate(45deg);
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
  }

  render() {
    return (
      <Link
        to={this.props.to}
        isOpen={this.props.isOpen}
        hasSubmenu={this.props.hasSubmenu}
      >
        {this.props.children}
      </Link>
    );
  }
}
