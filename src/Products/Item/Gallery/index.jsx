/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';

import Image from './Image';
import BigImage from './BigImage';
import { imageLink } from '../../../utilities';

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

export default class Galleryproduct extends React.Component {
  constructor(props) {
    super(props);
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
        <BigImage
          product={this.props.product}
          index={this.state.selectedIndex}
        />
        <Gallery>
          {this.props.product.images.map((image, index) => (
            <Image
              src={imageLink(image.id, image.fileName, 256)}
              isSelected={this.state.selectedIndex === index}
              onChangeImage={() => this.handleChangeImage(index)}
              key={image.id}
              alt={this.props.product.title}
            />
          ))}
        </Gallery>
        <About>
          {this.props.product.description}
        </About>
      </div>
    );
  }
}
