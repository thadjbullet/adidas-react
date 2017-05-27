import React from 'react';
import styled from 'styled-components';
import media from '../../media';

import Title from './Title';
import Options from './Options';
import Gallery from './Gallery';
import BuyButton from './BuyButton';

const Main = styled.main`
  flex-basis: 66.66667%;
  flex: 1;
`;

const Item = styled.div`
  flex: 1;
  padding: 0 30px;
`;

const Container = styled.div`
  padding: 15px 0 31px;
  position: relative;
  display: flex;
  justify-content: space-between;
  max-height: 0;

  ${media.sm('max')`
    flex-direction: column;
    max-height: 100%;
    padding: 30px 0 0;
  `}
`;

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '#c5c5c5' };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(color) {
    this.setState({
      color,
    });
  }

  render() {
    return (
      <Main>
        <Item>
          <Container>
            <Title color={this.state.color} />
            <Options
              onChangeColor={this.handleChangeColor}
              color={this.state.color}
            />
          </Container>
          <Gallery />
        </Item>
        <BuyButton>Buy Now</BuyButton>
      </Main>
    );
  }
}
