/* @flow */

import React from 'react';
import styled from 'styled-components';
import media from '../../media';
import { formatPrice } from '../utilities';

import Button from './ColorButton';
import Label from '../../components/Label';

const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 25px;

  ${media.sm('max')`
    flex-direction: column-reverse;
    margin-top: 0;
  `}
`;

const ColorFilter = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  ${media.sm('max')`
    width: 100%;
    justify-content: space-between;
    flex-direction: row-reverse;
  `}
`;

const SaleLabel = styled(Label)`
  margin-left: 30px;

  ${media.sm('max')`
    margin: 0;
  `}
`;

const Cost = styled.h2`
  display: flex;
  font-size: 80px;
  font-family: 'AvenirBold';
  padding: 10px 0;
  margin: 20px 0;
  color: ${(props: { color: string }) => props.color};
  font-weight: 400;

  ${media.sm('max')`
    align-self: flex-start;
    margin: 0;
  `}
`;

const Wrapper = styled.div``;

export default (props: { onChangeColor: Function, color: string, sale: boolean, cost: Object }) =>
  (<Container>
    <ColorFilter>
      <Wrapper>
        <Button color="#c5c5c5" onChangeColor={props.onChangeColor} />
        <Button color="#4d87ca" onChangeColor={props.onChangeColor} />
        <Button color="#4a4a4a" onChangeColor={props.onChangeColor} />
        <Button color="#e0e0e0" onChangeColor={props.onChangeColor} />
      </Wrapper>
      {props.sale && <SaleLabel color={props.color}>Sale</SaleLabel>}
    </ColorFilter>
    <Cost color={props.color}>{formatPrice(props.cost)}</Cost>
  </Container>);
