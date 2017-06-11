import React from 'react';
import styled from 'styled-components';
import SizeButton from './SizeButton';

import media from '../../../media';

const Container = styled.div`
  ${media.xs('max')`
    padding-top: 10px;
  `}
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

export default class FilterSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(id) {
    this.setState({ id });
  }

  render() {
    return (
      <Container>
        <Span>Size</Span>
        {this.props.sizes &&
          this.props.sizes.map(item => (
            <SizeButton
              isSelected={this.isSelected}
              id={item}
              selectedId={this.state.id}
              key={item}
            >
              {item}
            </SizeButton>
          ))}
      </Container>
    );
  }
}
