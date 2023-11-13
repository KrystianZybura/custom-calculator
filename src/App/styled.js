import styled, { css } from "styled-components";

export const Calculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
`;

export const Button = styled.button`
  font-size: 32px;
  cursor: pointer;
  background: #fff9;
  border: 1px solid #fff9;
  transition: 0.1s;
  outline: none;

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
`;

export const CurrentOperand = styled.div`
  color: #fff;
  font-size: 40px;
`;
