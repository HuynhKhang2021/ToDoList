import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: gray;
`;

export const HomeForm = styled.div`
  margin: 16px;
  padding: 16px;
  width: 500px;
  background-color: white;
  border-radius: 4px;
`;
export const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const HomeTitle = styled.h3`
  margin: 0 8px;
  font-weight: normal;
  cursor: pointer;
  font-size: ${({ size }) => size || "16px"};

  ${(props) =>
    props.active &&
    css`
      padding-bottom: 4px;
      color: #0d6efd;
      border-bottom: 2px solid #0d6efd;
    `}
`;
