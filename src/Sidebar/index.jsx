/* @flow */

import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Navigation';
import Search from './Search';
import Copyrights from './Copyrights';
import media from '../media';

const Aside = styled.aside`
  background: #0e0e0e;
  display: flex;
  justify-content: flex-start;
  flex-basis: 33.333334%;
  min-height: 100vh;
  max-width: 100%;
  padding: 0 22px;
  max-width: 414px;

  ${media.sm('max')`
    flex-basis: auto;
    justify-content: center;
    max-width: 100%;
    min-height: 64px;
  `};
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
`;

type State = { isMenuOpened: boolean };

export default class Sidebar extends React.Component<any, any, State> {
  constructor() {
    super();
    this.state = {
      isMenuOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState((state: { isMenuOpened: boolean }) => ({
      isMenuOpened: !state.isMenuOpened,
    }));
  }

  render() {
    return (
      <Aside>
        <Container>
          <Logo handleClick={this.handleClick} isMenuOpened={this.state.isMenuOpened} />
          <Search />
          <Nav isMenuOpened={this.state.isMenuOpened} />
          <Copyrights />
        </Container>
      </Aside>
    );
  }
}
