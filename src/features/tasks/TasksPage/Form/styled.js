import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  /* margin-top: -20px; */
  border: 2px solid #ddd;
  padding: 20px;
  background-color: #fff;
  font-size: 20px;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  border: 2px solid #ddd;

  ${({ placeholder }) =>
    placeholder &&
    css`
      padding: 10px;
      margin: 10px;
      flex-shrink: 0;

      @media (max-width: 767px) {
        width: 100%;
      }
    `}
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 100%;
  }

  background-color: hsl(180, 100%, 25%);
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  transition: transform 1s;
  transition-timing-function: cubic-bezier(0.75, 0.14, 0.59, 1.03);

  &:hover {
    background-color: hsl(180, 100%, 40%);
    transform: scale(1.15);
  }
`;
