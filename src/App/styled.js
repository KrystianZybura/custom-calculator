import styled from "styled-components";

export const Calculator = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "value value value value"
    "numbers numbers numbers toolbar";
  grid-gap: 3px;
`;

export const Button = styled.button`
  padding: 20px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  border-radius: 2px;
  background-image: linear-gradient(
    to right top,
    #86ff00,
    #70fb30,
    #58f647,
    #3df058,
    #12eb66
  );

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

export const ActionBar = styled.div`
  display: grid;
  grid-area: toolbar;
`;

export const Numbers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-area: numbers;
`;

export const Value = styled.input`
  grid-area: value;
  background: green;
  color: white;
  padding: 10px;
`;
