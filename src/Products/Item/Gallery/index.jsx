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

const Images = [
  require('./shoe1.png'),
  require('./shoe2.png'),
  require('./shoe3.png'),
  require('./shoe4.png'),
  require('./shoe5.png'),
];

export default class GalleryItem extends React.Component {
  constructor() {
    super();
    this.state = { id: 0 };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(num) {
    this.setState({
      id: num,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <BigImage src={Images[this.state.id]} />
        </Container>
        <Gallery>
          <Image
            source={require('./shoe1.png')}
            id={0}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe2.png')}
            id={1}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe3.png')}
            id={2}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe4.png')}
            id={3}
            activeId={this.state.id}
            changeImage={this.changeImage}
          />
          <Image
            source={require('./shoe5.png')}
            id={4}
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
