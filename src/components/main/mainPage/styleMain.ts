import styled, { keyframes } from "styled-components";

export const box = styled.div`
  height: 10rem;
`;

export const dlgmltjd = styled.div`
  font-size: 10rem;
`;

export const settingBar = styled.div`
  width: 100wv;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const selectBox = styled.div`
  height: 3.5em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  background-color: #d9d9d9;
  margin-left: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const AniUp = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(180deg);
  }
`;

const AniDown = keyframes`
  0% {
    transform:rotate(180deg);
  }
  100%{
    transform:rotate(0deg);
  }
`;

export const arrowButtonDown = styled.div`
  animation: ${AniDown} 0.35s linear forwards;
`;

export const arrowButtonUp = styled.div`
  animation: ${AniUp} 0.35s linear forwards;
`;

export const RowBox = styled.div`
  flex-direction: column; // 세로(열) 방향 정렬
  justify-content: center;
  align-items: center;
  margin-right: 1em;
`;

export const selectOption = styled.div`
  background-color: green;
  text-align: center;
  &:hover {
    background-color: blue;
  }
`;
