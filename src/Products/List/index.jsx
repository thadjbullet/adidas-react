import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import get from '../../api';

import Filter from './Filter';
import Card from './Card';
import imageLink from '../../imageLink';

const Container = styled.main`
  flex-basis: 66.6667%;
  flex: 1;
`;

const Content = styled.div`
  padding: 22px 25px;
  justify-content: space-between;
`;

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.transformInputValues = this.transformInputValues.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props.match.url);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps.match.url);
  }

  /* eslint-disable no-console*/
  fetchData(props) {
    get(props)
      .then(res =>
        res.json().then(json =>
          this.setState({
            products: json.items.map(item => this.transformInputValues(item)),
          }),
        ),
      )
      .catch(error => console.error('request failed: ', error));
  }
  /* eslint-enable no-console*/

  /* eslint-disable class-methods-use-this */
  transformInputValues(json) {
    return {
      currency: json.currency,
      id: json.id,
      images: json.images[0],
      title: json.title,
      price: `${(json.price / 100).toFixed(2)}`,
      sizes: json.sizes,
      sale: Math.random() > 0.7,
    };
  }
  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <Container>
        <Filter
          sizes={
            this.state.products.length !== 0
              ? this.state.products[0].sizes
              : null
          }
        />
        <Content>
          <Row>
            {this.state.products.map(item => (
              <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
                <Card
                  image={imageLink(item.images.id, item.images.fileName, 512)}
                  to={`${this.props.match.url}/${item.id}`}
                  cost={item}
                  isSale={Math.random() > 0.7}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Container>
    );
  }
}
