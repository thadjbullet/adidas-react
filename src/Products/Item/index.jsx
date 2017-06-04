import React from 'react';
import styled from 'styled-components';
import media from '../../media';

import Title from './Title';
import Options from './Options';
import Gallery from './Gallery';
import BuyButton from './BuyButton';

const Main = styled.main`
  flex-basis: 66.66667%;
  flex: 1;
`;

const Item = styled.div`
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
    this.state = { color: '#c5c5c5', item: {} };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentWillMount() {
    this.fetchImages(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchImages(props);
  }

  fetchImages(props) {
    const { url } = props.match;

    fetch(`https://erodionov-adidas-fake-api.now.sh/v1/${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        Accept: '*/*',
        'Access-Control-Allow-Origin': 'http://kserebryansky-adidas-shop.now.sh',
      },
      mode: 'cors',
    })
      .then(res => res.json())
      .then(json => this.setState({ item: json }));
  }

  handleChangeColor(color) {
    this.setState({
      color,
    });
  }

  render() {
    return (
      <Main>
        <Item>
          <Container>
            <Title color={this.state.color} />
            <Options
              onChangeColor={this.handleChangeColor}
              color={this.state.color}
            />
          </Container>
          <Gallery item={this.state.item} />
        </Item>
        <BuyButton>Buy Now</BuyButton>
      </Main>
    );
  }
}
