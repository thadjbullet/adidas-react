import React from 'react';
import styled from 'styled-components';

import media from '../../../media';
import imageLink from '../../../imageLink';

const BigImage = styled.img`
  display: block;
  margin: 32px auto 30px;
  width: 100%;

  ${media.sm('min')`
    width: 80%;
  `}
`;

export default ({ product, index }) => (
  <BigImage
    src={
      product.images
        ? imageLink(
            product.images[index].id,
            product.images[index].fileName,
            1024,
          )
        : null
    }
    alt={product.title}
  />
);
