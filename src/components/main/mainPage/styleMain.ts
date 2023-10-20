import styled, { keyframes } from "styled-components";

export const box = styled.div`
  height: 5rem;
  margin-bottom: 1em;
`;

export const settingBar = styled.div`
  width: 100wv;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const selectBox = styled.div`
  height: 3em;
  gap: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border: 1px solid black;
  margin-left: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const selectOptionBar = styled.div`
  padding: 1px;
  margin-top: 0.5em;
  border-radius: 12px;

  border: 1px solid black;
`;

export const selectText = styled.p``;

export const gridPage = styled.div`
  width: 90vw;
  display: grid;
  justify-content: flex-end;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const gridOutPage = styled.div`
  display: flex;
  padding-left: 2.5vw;
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
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.25em;
  padding-right: 1.25em;

  height: 2em;
  border-radius: 12px;
  &:hover {
    background-color: lightgray;
  }
`;
