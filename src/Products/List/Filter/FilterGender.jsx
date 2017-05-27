import React from 'react';
import styled from 'styled-components';

import media from '../../../media';

const Container = styled.div`
  background: #fff;
  
  ${media.xs('min')`
    padding: 0 30px;
  `}

  ${media.sm('max')`
    padding: 10px 0;
  `}


`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'AvenirBold';
  font-size: 24px;
  color: ${props => (props.select ? '#4d42f8' : '#d6d6d6')};
  margin: 0 5px 0 0;
  text-transform: uppercase;

  &:hover {
    color: #4d42f8;
  }
`;

export default () => (
  <Container>
    <Button select>Man</Button>
    <Button>Woman</Button>
  </Container>
);
