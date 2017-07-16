/* @flow */
/* eslint-disable no-console, react/no-unused-prop-types */
/* global state, fetchData, handleChooseFilter, filterProducts */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { get } from '../../api';
import { transformInputValues, imageLink, getSizes } from '../utilities';

import Filter from './Filter';
import Card from './Card';

const Container = styled.main`
  flex-basis: 66.6667%;
  flex: 1;
`;

const Content = styled.div`
  padding: 22px 25px;
  justify-content: space-between;
  position: relative;
`;

type Props = {
  match: {
    url: string,
  },
};

type State = {
  products: Array<Object>,
  filter: string,
  sizes: Array<Object>,
  id: string,
};

export default class ProductsList extends React.Component<any, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: [{ images: [{}] }],
      filter: '',
      sizes: [],
      id: '',
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleChooseFilter = this.handleChooseFilter.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }
  state: State;

  componentDidMount() {
    this.fetchData((this.props.match: Object));
    console.log(this.props.match);
  }

  componentWillReceiveProps(newProps: { match: Object }) {
    this.fetchData(newProps.match);
    this.setState({ filter: '' });
  }

  handleChooseFilter(filter: string) {
    this.setState({
      filter,
    });
  }
  handleChooseFilter: Function;

  filterProducts(products: Array<Object>): Array<Object> {
    if (this.state.filter) {
      return products.filter((item: { sizes: Array<string> }) =>
        item.sizes.includes(this.state.filter),
      );
    }
    return products;
  }
  filterProducts: Function;

  fetchData({ url }: { url: string }) {
    get(url)
      .then((json: { items: Array<Object> }) =>
        this.setState({
          products: json.items.map((item: Object) => transformInputValues(item)),
          sizes: getSizes(
            json.items.map(({ sizes }: { sizes: Array<string> }) => ({
              sizes,
            })),
          ),
        }),
      )
      .catch((error: Error) => console.error('request failed: ', error));
  }
  fetchData: Function;

  render() {
    return (
      <Container>
        <Filter
          sizes={this.state.sizes}
          handleChooseFilter={this.handleChooseFilter}
          id={this.state.id}
        />
        <Content>
          <Row>
            {this.filterProducts(
              this.state.products,
            ).map((item: { id: string, images: Array<{ id: string, fileName: string }> }) =>
              (<Col xs={12} sm={6} md={6} lg={4} key={item.id}>
                <Card
                  image={imageLink(item.images[0].id, item.images[0].fileName, '512')}
                  to={`${this.props.match.url}/${item.id}`}
                  cost={item}
                  isSale={Math.random() > 0.7}
                />
              </Col>),
            )}
          </Row>
        </Content>
      </Container>
    );
  }
}
