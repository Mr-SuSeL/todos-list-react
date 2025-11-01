import styled from "styled-components";

export const BothButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1112px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: hsl(180, 98%, 26%);

  &:hover {
    color: hsl(180, 50%, 50%);
    transition: 1s;
  }

  &:disabled {
    color: #dddddd;
    cursor: default;
  }
`;
