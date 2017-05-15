import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  align-items: flex-start;
  justify-content: space-between;
  max-height: 40px;
  position: relative;
`;

const Container = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: #3a3a3a;
  font-family: 'AvenirBold';
  font-size: 64px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

const SaveButton = styled.button`
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-transform: uppercase;
  width: 75px;
  height: 75px;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-top: 10px;
  text-align: center;

  &:hover {
    background: #4d42f8;
    transform: scale(1.2);
  }
`;

export default () => (
  <Header>
    <Container>
      <Title>Ultra<br />Boost</Title>
      <SaveButton>Save</SaveButton>
    </Container>
  </Header>
);
