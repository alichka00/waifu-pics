import styled, { css } from "styled-components";

interface I_TypeProps {
  isActive: boolean;
}

export const Type = styled.div<I_TypeProps>`
  cursor: pointer;
  user-select: none;
  width: 180px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  color: #000;
  background-color: #272525e0;
  border-radius: 20px;

  :hover {
    background-color: #fffc;
    transition: 0.5s;
    color: #000;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          transition: 0.5s;
          background-color: #fffc;
          color: #000;
        `
      : css`
          transition: 0.5s;
          border: none;
          background-color: #333333;
          color: #fffc;
        `}
`;
