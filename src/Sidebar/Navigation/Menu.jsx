import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import media from '../../media';

const Title = styled.div`
  color: #fff;
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

  ${media.sm('min')`
    &:after {
      align-self: center;
      content: '';
      display: flex;
      width: 6px;
      height: 6px;
      border: 3px solid #fff;
      border-left: none;
      border-top: none;
      border-radius: 3px;
      transform: ${props => (props.isOpen ? 'rotate(225deg)' : 'rotate(45deg)')};
      margin-left: 12px;
      transition-duration: 0.3s;

      &:hover {
        border: #fff;
      }
    } 
  `}
`;

const Wrapper = styled.div`
  ${media.sm('max')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Title onClick={this.handleClick} isOpen={this.state.isOpen}>
          {this.props.title}
        </Title>
        {this.state.isOpen && this.props.children}
      </Wrapper>
    );
  }
}

export default withRouter(Menu);
