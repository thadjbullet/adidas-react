import React from 'react';
import styled from 'styled-components';

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
`;

const Container = styled.div`
  padding: 15px 31px 31px;
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
            <Gallery />
          </Container>
        </Item>
        <BuyButton>Buy Now</BuyButton>
      </Main>
    );
  }
}
