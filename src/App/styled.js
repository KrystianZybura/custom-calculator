import styled, { css } from "styled-components";

export const Calculator = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  background: #fff;
`;

export const Button = styled.button`
  padding: 20px;
  border: none;
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

export const Value = styled.div`
  grid-column: span 4;
  background-image: linear-gradient(
    to right top,
    #0f3f2b,
    #0e3324,
    #0c281c,
    #091d15,
    #01120b
  );
  color: white;
  padding: 30px;
`;
