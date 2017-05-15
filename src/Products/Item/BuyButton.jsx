import styled from 'styled-components';

export default styled.button`
  background-image: linear-gradient(to right, #4949aa, #27275d);
  bottom: 0;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: 'AvenirBold';
  font-size: 32px;
  font-weight: bold;
  border: none;
  width: 80%;
  padding: 37px 0;
  position: fixed;
  text-transform: uppercase;

  &:hover {
    background-image: linear-gradient(to left, #4949aa, #27275d);
  }
`;
