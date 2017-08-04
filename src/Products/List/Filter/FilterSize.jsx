/* @flow */
/* global state, selectId */

import React from 'react';
import styled from 'styled-components';
import SizeButton from './SizeButton';

import media from '../../../media';

const Container = styled.div`
  ${media.xs('max')`
    padding-top: 10px;
  `};
`;

const Span = styled.span`
  color: #4d42f8;
  cursor: default;
  font-family: 'AvenirBold';
  font-size: 24px;
  padding-right: 17px;
  padding-left: 5px;
  text-transform: uppercase;
`;

type Props = {
  handleChooseFilter: Function,
  sizes: Array<Object>,
};

type State = {
  id: string,
};

export default class FilterSize extends React.Component<any, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { id: '' };
    this.selectId = this.selectId.bind(this);
  }
  state: State;

  selectId(id: string) {
    /* If click on same element - remove selection */
    if (this.state.id === id) {
      this.setState({ id: '' });
      this.props.handleChooseFilter('');
    } else {
      this.setState({ id });
      this.props.handleChooseFilter(id);
    }
  }
  selectId: Function;

  render() {
    return (
      <Container>
        <Span>Size</Span>
        {this.props.sizes &&
          this.props.sizes.map(item =>
            (<SizeButton selectId={this.selectId} id={item} selectedId={this.state.id} key={item}>
              {item}
            </SizeButton>),
          )}
      </Container>
    );
  }
}
