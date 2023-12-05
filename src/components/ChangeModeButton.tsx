import styled from "styled-components";

export const MyButton = styled.button`
  font-size: 18px;
  height: 40px;
  width: 130px;
  border-radius: 15px;

  font-family: "Roboto";
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: 500;
  color: #972ac2;

  border: 2px solid #972ac2;

  background-color: #c2fbd7;

  cursor: pointer;
  font-family: "Roboto";
  padding: 7px 20px;
  text-align: center;

  &:hover {
    font-weight: 700;
    letter-spacing: 1.6px;
    background-color: #8de4ad;
  }
`;
