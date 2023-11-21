import styled, { css } from "styled-components";

export const Calculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
  margin: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 5rem);
    grid-template-rows: minmax(6rem, auto) repeat(5, 5rem);
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(4, 4rem);
    grid-template-rows: minmax(4rem, auto) repeat(5, 4rem);
  }
`;

export const Button = styled.button`
  font-size: 32px;
  cursor: pointer;
  background: #fff9;
  border: 1px solid #fff9;
  transition: 0.1s;
  outline: none;

  @media (max-width: 767px) {
    font-size: 25px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }

  ${({ $spanTwo }) =>
    $spanTwo &&
    css`
      grid-column: span 2;
    `}

  &:hover, &:focus {
    background: #ffffffe6;
  }
`;

export const Output = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  grid-column: 1 / -1;
  background: #0009;
  padding: 12px;
  overflow-wrap: break-word;
  word-break: break-all;
`;

export const PreviousOperand = styled.div`
  color: #fff9;
  font-size: 24px;

  @media (max-width: 767px) {
    font-size: 21px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const CurrentOperand = styled.div`
  color: #fff;
  font-size: 40px;

  @media (max-width: 767px) {
    font-size: 32px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;
