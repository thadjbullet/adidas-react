import React from 'react';
import styled from 'styled-components';

import Button from './ColorButton';
import Label from '../../components/Label';

const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 16px;
`;

const ColorFilter = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

const SaleLabel = styled(Label)`
  margin-left: 30px;
`;

const Cost = styled.h2`
  font-size: 80px;
  font-family: 'AvenirBold';
  padding: 10px 0;
  margin: 20px 0;
  color: #e2e2e2;
  font-weight: 400;
`;

export default () => (
  <Container>
    <ColorFilter>
      <Button color="#c5c5c5" />
      <Button color="#4d87ca" />
      <Button color="#4a4a4a" />
      <Button color="#e0e0e0" />
      <SaleLabel>Sale</SaleLabel>
    </ColorFilter>
    <Cost>170$</Cost>
  </Container>
);
