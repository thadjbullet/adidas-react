import styled from 'styled-components';
import media from '../../media';

export default styled.button`
  background-image: linear-gradient(to right, #4949aa, #27275d);
  bottom: -2px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: 'AvenirBold';
  font-size: 32px;
  font-weight: bold;
  padding: 37px 0;
  position: fixed;
  text-transform: uppercase;
  width: calc(100% - 414px);

  &:hover {
    background-image: linear-gradient(to left, #4949aa, #27275d);
  }

  ${media.sm('max')`
    width: 100%;
  `}
`;
