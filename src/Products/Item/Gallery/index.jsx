/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';

import Image from './Image';

const Container = styled.div`
  display: flex;
`;

const BigImage = styled.img`
  display: block;
  margin: 0 auto;
`;

const Gallery = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LineContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 160px;
  justify-content: center;
  height: 120px;
  margin: 0 14px;
`;

const Lines = styled.i`
  width: 100%;
  background: #e7e7e7;
  height: 3px;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    background: #e7e7e7;
    height: 3px;
    transition: inherit;
    top: -6px;
  }

  &:after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    background: #e7e7e7;
    height: 3px;
    transition: inherit;
    top: 3px;
  }
`;

const MoreImagesButton = styled.button`
  border: none;
  background: none;
  font-family: 'AvenirNextReg';
  color: #c0c0c0;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  width: 64px;
  flex: 0 1 40px;

  &:hover {
    transform: scale(1.2);
  }
`;

const About = styled.p`
  font-family: 'Avenir';
  font-weight: 800;
  font-size: 33px;
  line-height: 1.52;
  color: #d8d8d8;
  margin-bottom: 170px;
  padding: 0;
  margin-top: 32px;
`;

const CompanyName = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <div>
    <Container>
      <BigImage src={require('./shoes@3x.png')} />
    </Container>
    <Gallery>
      <Image source={require('./shoe1.png')} />
      <Image source={require('./shoe2.png')} />
      <Image source={require('./shoe3@3x.png')} />
      <Image source={require('./shoe4.png')} sel="active" />
      <LineContainer>
        <Lines />
      </LineContainer>
      <MoreImagesButton>see more photos</MoreImagesButton>
    </Gallery>
    <About>
      <CompanyName>Adidas</CompanyName>
      {' '}
      is a German multinational corporation, headquartered in Herzogenaurach,
      Germany, that designs and manufactures shoes, clothing and accessories.
    </About>
  </div>
);
