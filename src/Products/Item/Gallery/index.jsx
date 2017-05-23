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
  width: 80%;
  height: 80%;
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

export default class GalleryItem extends React.Component {
  static chooseImage(id) {
    switch (id) {
      case 1:
        return require('./shoe1.png');
      case 2:
        return require('./shoe2.png');
      case 3:
        return require('./shoe3.png');
      case 4:
        return require('./shoe4.png');
      case 5:
        return require('./shoe5.png');
      default:
        return require('./shoe1.png');
    }
  }

  constructor() {
    super();
    this.state = { id: 1 };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(num) {
    this.setState({
      id: num,
    });
  }

  render() {
    const bigImage = GalleryItem.chooseImage(this.state.id);
    return (
      <div>
        <Container>
          <BigImage src={bigImage} />
        </Container>
        <Gallery>
          <Image
            source={require('./shoe1.png')}
            id={1}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe2.png')}
            id={2}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe3@3x.png')}
            id={3}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe4.png')}
            id={4}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe3@3x.png')}
            id={5}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
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
