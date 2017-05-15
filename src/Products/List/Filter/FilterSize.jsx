import React from 'react';
import styled from 'styled-components';

import media from '../../../media';

const Container = styled.div`
  ${media.xs('max')`
    padding-top: 10px;
  `}
`;

const Span = styled.span`
  color: #4d42f8;
  cursor: default;
  font-family: 'AvenirBold';
  font-size: 24px;
  padding-right: 17px;
  padding-left: 5px;
  text-transform: uppercase;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'AvenirBold';
  font-size: 24px;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  padding: 0 4px;
  text-transform: uppercase;

  &:hover {
    color: #4d42f8;
  }
`;

export default () => (
  <Container>
    <Span>Size</Span>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isActive>41</Button>
    <Button>42</Button>
  </Container>
);
