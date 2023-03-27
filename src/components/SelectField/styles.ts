import styled from "styled-components";

interface I_IsOpened {
  isOpened: boolean;
}

export const SelectWrapper = styled.div<I_IsOpened>`
  width: 200px;

  @media (max-width: 400px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Select = styled.select`
  cursor: pointer;
  user-select: none;
  width: 100%;
  padding: 8px;
  font-size: 18px;
  color: #000;
  font-family: "Nunito", sans-serif;
  background-color: #fffc;
  border: none;
  border-radius: 10px;
  outline: none;
`;

export const Option = styled.option`
  color: #000;
`;
