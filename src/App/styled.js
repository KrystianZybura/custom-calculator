import styled, { css } from "styled-components";

export const Calculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 20px;
  background-image: linear-gradient(
    to right top,
    #86ff00,
    #70fb30,
    #58f647,
    #3df058,
    #12eb66
  );

  ${({ $spanTwo }) =>
    $spanTwo &&
    css`
      grid-column: span 2;
    `}

  &:hover {
    background-image: linear-gradient(
      to right top,
      #83dc20,
      #6bd338,
      #55ca48,
      #3ec154,
      #26b75e
    );
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
