import styled from "styled-components";

export const process = styled.div`
  margin: 0 auto;
  width: 80vw;
  text-align: right;
  padding-top: 6.7vh;
  padding-bottom: 2vh;
`;

export const mainImgPage = styled.div`
  width: 80vw;
  height: 70vh;
  box-shadow: 0px 0px 12px 4px rgba(217, 217, 217, 0.5);
  margin: auto;
`;

export const halfBox = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const halfLine = styled.div`
  width: 1px;
  height: 70vh;
  background-color: #d9d9d9;
`;

export const createImgBox = styled.div<{ img: string }>`
  background-repeat: no-repeat;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  margin-top: 2em;
  background-size: cover;
  background-position: center;
  width: 25em;
  min-height: 25em;
  background-image: 25em 25em;
  margin: auto;
  background-image: url(https://infinitynovel.kro.kr${(props) => props.img});
`;

export const contentBox = styled.div`
  width: 32vw;
  height: 40vh;
  margin: auto;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  padding-left: 0px !important;
`;

export const lineIndex = styled.div`
  font-size: 20px;
`;

export const keywordBoxBond = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 23vw;
  height: 4vh;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  gap: 1vw;
`;

export const keywordBoxChild = styled.div`
  font-size: 16px;
  padding: 0.5em 0.8em;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const createButton = styled.div<{ ty: boolean }>`
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7em;
  height: 2.5em;
  margin: auto;
  border: ${(prev) => (prev.ty ? "1px solid #d9d9d9" : "neno")};
  background-color: ${(prev) => (prev.ty ? "white" : "#CCF0FF")};
`;
