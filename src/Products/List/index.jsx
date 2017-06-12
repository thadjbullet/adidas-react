import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { get } from '../../api';
import { transformInputValues, imageLink, getSizes } from '../../utilities';

import Filter from './Filter';
import Card from './Card';
import Loading from '../../components/Loading';

const Container = styled.main`
  flex-basis: 66.6667%;
  flex: 1;
`;

const Content = styled.div`
  padding: 22px 25px;
  justify-content: space-between;
  position: relative;
`;

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      filter: null,
      sizes: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props.match.url);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps.match.url);
    this.setState({ filter: null });
  }

  handleFilter(filter) {
    this.setState({
      filter,
    });
  }

  filterProducts(products) {
    return this.state.filter
      ? products.filter(item => item.sizes.includes(this.state.filter))
      : products;
  }

  /* eslint-disable no-console*/
  fetchData(props) {
    get(props)
      .then(res =>
        res.json().then(json =>
          this.setState({
            products: json.items.map(item => transformInputValues(item)),
            sizes: getSizes(json.items.map(({ sizes }) => ({ sizes }))),
          }),
        ),
      )
      .catch(error => console.error('request failed: ', error));
  }
  /* eslint-enable no-console*/

  render() {
    return (
      <Container>
        <Filter
          sizes={this.state.sizes}
          handleFilter={this.handleFilter}
          id={this.state.id}
        />
        <Content>
          <Row>
            {this.state.products
              ? this.filterProducts(this.state.products).map(item => (
                <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
                  <Card
                    image={imageLink(
                        item.images[0].id,
                        item.images[0].fileName,
                        512,
                      )}
                    to={`${this.props.match.url}/${item.id}`}
                    cost={item}
                    isSale={Math.random() > 0.7}
                  />
                </Col>
                ))
              : <Loading />}
          </Row>
        </Content>
      </Container>
    );
  }
}
