/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Label from '../../components/Label';

const Card = styled.div`
  background: #f4f4f4;
  padding: 9px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 17px;
  justify-content: space-between;
  flex: 1 0 auto;
`;

const Img = styled.img`
  width: 100%;
`;

const Link = styled(NavLink)`
  background: #fff;
  background-image: ${props => (props.sale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '')};
  color: ${props => (props.sale ? '#fff' : '#111')};
  display: block;
  font-family: 'AvenirBold';
  font-size: 30px;
  margin-top: 6px;
  padding: 23px 0 27px;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-image: ${props => (props.sale ? 'linear-gradient(180deg, #0c09bf, #966dd8)' : 'linear-gradient(107deg, #0c09bf, #966dd8)')};
    color: #fff;
  }
`;

const SaleLabel = styled(Label)`
  position: absolute;
  top: 17px;
  right: 17px;
`;

export default props => (
  <Card>
    <Img src={props.image} />
    <Link to="/products/:id" sale={props.sale}>{props.cost}</Link>
    {props.sale && <SaleLabel>Sale</SaleLabel>}
  </Card>
);
