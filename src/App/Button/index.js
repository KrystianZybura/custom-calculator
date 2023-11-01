import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 50px;
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
