/* eslint-disable global-require, quote-props */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Get from '../../Api';

import Filter from './Filter';
import Card from './Card';
import imageLink from '../../components/GetImageLink';

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
      data: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  fetchData(props) {
    const { url } = props.match;

    Get(url)
      .then(json => this.setState({ data: json.items }))
      .catch(error => global.console.log('request failed', error));
  }

  render() {
    const data = this.state.data;
    global.console.log('data', data);
    return (
      <Container>
        <Filter sizes={data.length !== 0 ? data[0].sizes : null} />
        <Content>
          <Row>
            {data.map(item => (
              <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
                <Card
                  image={imageLink(
                    item.images[0].id,
                    item.images[0].fileName,
                    512,
                  )}
                  to={`${this.props.match.url}/${item.id}`}
                  cost={item.price}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Container>
    );
  }
}
