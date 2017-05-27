import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Header = styled.header`

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

  ${media.sm('max')`
    font-size: 36px;
    
    & > br {
      display: none;
    }
  `}
`;

const SaveButton = styled.button`
  justify-content: center;
  background: ${props => props.color};
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
    transform: scale(1.2);
  }

  ${media.sm('max')`
    display: none;
  `}
`;

export default props => (
  <Header>
    <Container>
      <Title>Ultra <br />Boost</Title>
      <SaveButton color={props.color}>Save</SaveButton>
    </Container>
  </Header>
);
