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

export default () => (
  <Main>
    <Item>
      <Container>
        <Title />
        <Options />
        <Gallery />
      </Container>
    </Item>
    <BuyButton>Buy Now</BuyButton>
  </Main>
);
