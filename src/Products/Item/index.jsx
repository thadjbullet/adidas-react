import React from 'react';
import styled from 'styled-components';
import media from '../../media';
import get from '../../api';
import { transformInputValues } from '../../utilities';

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
  `}
`;

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '#c5c5c5', product: {} };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.transformInputValues = this.transformInputValues.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchData(props);
  }

  /* eslint-disable class-methods-use-this */
  transformInputValues(json) {
    return {
      description: json.description,
      id: json.id,
      images: json.images,
      title: json.title,
      price: `${(json.price / 100).toFixed(2)}`,
      sale: Math.random() > 0.7,
    };
  }
  /* eslint-enable class-methods-use-this */

  /* eslint-disable no-console*/
  fetchData(props) {
    const url = props.match.url;
    get(url)
      .then(res =>
        res
          .json()
          .then(json => this.setState({ product: transformInputValues(json) })),
      )
      .catch(err => console.log('request failed: ', err));
  }
  /* eslint-enable no-console*/

  handleChangeColor(color) {
    this.setState({
      color,
    });
  }

  render() {
    return (
      <Main>
        <Product>
          <Container>
            <Title color={this.state.color}>{this.state.product.title}</Title>
            <Options
              onChangeColor={this.handleChangeColor}
              color={this.state.color}
              sale={this.state.product.sale}
              cost={this.state.product}
            />
          </Container>
          <Gallery product={this.state.product} />
        </Product>
        <BuyButton>Buy Now</BuyButton>
      </Main>
    );
  }
}
