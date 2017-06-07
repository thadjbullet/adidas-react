/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import media from '../../../media';

import Image from './Image';
import GetImageLink from '../../../components/GetImageLink';

const BigImage = styled.img`
  display: block;
  margin: 30px auto 30px;
  width: 100%;

  ${media.sm('min')`
    width: 80%;
  `}
`;

const Gallery = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const About = styled.p`
  font-family: 'Avenir';
  font-weight: 400;
  font-size: 33px;
  line-height: 1.52;
  color: #d8d8d8;
  margin: 40px 0 170px;
  padding: 0;
`;

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
    const item = this.props.item;
    const images = this.props.item.images;
    return (
      <div>
        <BigImage
          src={
            images
              ? GetImageLink(
                  images[this.state.selectedIndex].id,
                  images[this.state.selectedIndex].fileName,
                  1024,
                )
              : null
          }
          alt={item.title}
        />
        <Gallery>
          {images
            ? images.map((image, index) => (
              <Image
                src={GetImageLink(image.id, image.fileName, 256)}
                isSelected={this.state.selectedIndex === index}
                onChangeImage={() => this.handleChangeImage(index)}
                key={image.id}
                alt={item.title}
              />
              ))
            : null}
        </Gallery>
        <About>
          {this.props.item.description}
        </About>
      </div>
    );
  }
}
