/* @flow */
/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';

import media from '../../media';

const Form = styled.form`
  padding: 0;

  ${media.sm('max')`
  display: none;
  `};
`;

const Label = styled.label`display: none;`;

const Input = styled.input`
  background: url(${require('./group.png')}) #0e0e0e no-repeat 4px center;
  border: 0;
  border-bottom: 4px solid #3c3c3c;
  box-sizing: border-box;
  color: #fff;
  font-family: 'AndaleMono';
  font-size: 24px;
  padding: 10px 14px 10px 40px;
  width: 100%;

  &:hover {
    border-bottom: 4px solid #fff;
  }
  &:focus {
    border-bottom: 4px solid #fff;
  }
`;

export default () =>
  (<Form>
    <Label />
    <Input />
  </Form>);
