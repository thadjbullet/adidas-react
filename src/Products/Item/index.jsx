/* @flow */
/* global state, fetchData, handleChangeColor */

import React from 'react';
import styled from 'styled-components';
import media from '../../media';
import { get } from '../../api';
import { transformInputValues } from '../utilities';

import Title from './Title';
import Options from './Options';
import Gallery from './Gallery';
import BuyButton from './BuyButton';

const Main = styled.main`
  flex-basis: 66.66667%;
  flex: 1;
`;

const Product = styled.div`
  flex: 1;

  padding: 0 30px;
`;

const Container = styled.div`
  padding: 15px 0 31px;
  position: relative;
  display: flex;
  justify-content: space-between;
  max-height: 0;
  ${media.sm('max')`
    flex-direction: column;
    max-height: 100%;
    padding: 30px 0 0;
  `};
`;

type Props = {
  match: {
    url: string,
  },
};

type State = {
  color: string,
  product: {
    images: Array<Object>,
    title: string,
    sale: boolean,
  },
};

export default class Page extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: '#c5c5c5',
      product: {
        images: [{}],
        sale: false,
        title: '',
      },
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  state: State;

  componentDidMount() {
    this.fetchData(this.props.match.url);
  }

  componentWillReceiveProps(props: { match: { url: string } }) {
    this.fetchData(props.match.url);
  }

  /* eslint-disable no-console */
  fetchData(url: string) {
    get(url)
      .then((json: Object) =>
        this.setState({
          product: transformInputValues(json),
        }),
      )
      .catch((err: Error) => console.log('request failed: ', err));
  }
  fetchData: Function;
  /* eslint-enable no-console */

  handleChangeColor(color: string) {
    this.setState({
      color,
    });
  }
  handleChangeColor: Function;

  render() {
    return (
      <Main>
        {
          <Product>
            <Container>
              <Title color={this.state.color}>
                {this.state.product.title}
              </Title>
              <Options
                onChangeColor={this.handleChangeColor}
                color={this.state.color}
                sale={this.state.product.sale}
                cost={this.state.product}
              />
            </Container>
            <Gallery product={this.state.product} />
          </Product>
        }
        <BuyButton>Buy Now</BuyButton>
      </Main>
    );
  }
}
