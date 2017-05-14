import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  background: #ff5c5c;
  
  color: #fff;
  font-family: 'Avenir';
  right: 17px;
  padding: 6px 21px;
  position: absolute;
  text-transform: uppercase;
  top: 17px;
`;

export default props => <Span badge={props.badge}>Sale</Span>;
