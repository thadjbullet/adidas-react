import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Nav from './Navigation';
import media from '../media';

const Aside = styled.aside`
  background: #0e0e0e;
  display: flex;
  justify-content: flex-start;
  min-height: 64px;
  max-width: 100%;
  padding: 0 22px;

  ${media.xs('min')`
    flex-basis: 33.333334%;
    justify-content: center;
    min-height: 100vh;
    max-width: 414px;
  `}
`;
const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  render() {
    return (
      <Aside>
        <Container>
          <Logo
            handleOpenMenu={this.handleOnClick}
            isMenuOpen={this.state.isMenuOpen}
          />
          <Search />
          <Nav isMenuOpen={this.state.isMenuOpen} />
        </Container>
      </Aside>
    );
  }
}
