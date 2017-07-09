/* @flow */

import { css } from 'styled-components';

const s = {
  media: {
    xs: '468px',
    sm: '768px',
    md: '970px',
    lg: '1170px',
  },
};

/**
 * @method media
 * @param {object} opt - option for styled
 * @param {object} s.media - option for config with media query
 * @param {string} point - media query breakpoint
 * @param {string} prefix - min | max prefix size
 * @return {object} css property
 *
 * ${media.sm('min')`display: block`}
 */

const media = Object.keys(s.media).reduce((opt, point) => {
  const query = s.media[point];
  const cssBody = opt;
  cssBody[point] = (prefix: string) => (...args) => css`
      @media (${prefix}-width: ${query}) {
        ${css(...args)}
      }
    `;
  return cssBody;
}, {});

export default media;
