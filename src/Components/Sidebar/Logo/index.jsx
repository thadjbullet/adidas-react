import React from 'react';
import styled from 'styled-components';
import meida from '../../../media.js';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 31px auto;

  ${meida.xs('max')`
    display: flex;
    justify-content: start;
    height: 100%;
    margin: 0;
  `}
`;

const Img = styled.img`
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  ${meida.xs('max')`
    height: auto;
    display: block;
    max-width: 52px;
    padding: 0;
  `}
`;

const Link = styled.a`
  align-self: center;
`;

export default () => {
  return (
    <Logo>
      <Link href="/">
        <Img src={require('./logo.png')} />
      </Link>
    </Logo>
  );
};
