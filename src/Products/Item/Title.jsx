/* @flow */

import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const Container = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
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
  `};
`;

const SaveButton = styled.button`
  justify-content: center;
  background: ${(props: { color: string }) => props.color};
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
  `};
`;

export default (props: { children: string, color: string }) =>
  (<header>
    <Container>
      <Title>
        {props.children}
      </Title>
      <SaveButton color={props.color}>Save</SaveButton>
    </Container>
  </header>);
