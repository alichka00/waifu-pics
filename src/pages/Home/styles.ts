import styled from "styled-components";

interface I_ImageProps {
  src: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 5px;
`;

export const Image = styled.img<I_ImageProps>`
  max-width: 500px;
  height: 400px;
`;

export const WrapperSelects = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FilterWrap = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ReloadButton = styled.button`
  z-index: 1;
  position: fixed;
  bottom: 8px;
  right: 15px;
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50%;
  background: #333333;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 30px;
  text-align: center;
`;
