/* @flow */

import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 100%;
`;

const Text = styled.div`
  font-family: sans-serif;
  font-size: 24px;
  color: #0e0e0e;
`;

export default () =>
  (<Container>
    <Text>
      Учебный проект в рамках курса Е. Родионова. Права на торговую марку Adidas™ принадлежат ее
      законным владельцам.
    </Text>
    <Text>
      Исходники: <a href="https://github.com/thadjbullet/adidas-react">Github</a>
      .{' '}
    </Text>
  </Container>);
