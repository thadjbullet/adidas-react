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
  max-height: 600px;
`;

const Gallery = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const images = [
  require('./shoe1.png'),
  require('./shoe2.png'),
  require('./shoe3.png'),
  require('./shoe4.png'),
  require('./shoe5.png'),
];

export default class GalleryItem extends React.Component {
  constructor() {
    super();
    this.state = { selectedIndex: 0 };
  }

  handleChangeImage(selectedIndex) {
    this.setState({
      selectedIndex,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <BigImage src={images[this.state.selectedIndex]} />
        </Container>
        <Gallery>
          {images.map((image, index) => (
            <Image
              src={image}
              isSelected={this.state.selectedIndex === index}
              onChangeImage={() => this.handleChangeImage(index)}
            />
          ))}
        </Gallery>
        <About>
          <CompanyName>Adidas</CompanyName>
          {' '}
          is a German multinational corporation, headquartered in Herzogenaurach,
          Germany, that designs and manufactures shoes, clothing and accessories.
        </About>
      </div>
    );
  }
}
