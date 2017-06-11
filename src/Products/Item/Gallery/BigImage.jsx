import React from 'react';
import styled from 'styled-components';

import media from '../../../media';
import imageLink from '../../../imageLink';

const BigImage = styled.img`
  display: block;
  margin: 30px auto 30px;
  width: 100%;

  ${media.sm('min')`
    width: 80%;
  `}
`;

export default ({ item, index }) => (
  <BigImage
    src={
      item.images
        ? imageLink(item.images[index].id, item.images[index].fileName, 1024)
        : null
    }
    alt={item.title}
  />
);
