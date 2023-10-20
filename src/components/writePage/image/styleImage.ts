import styled from "styled-components";

export const mainImgPage = styled.div`
  width: 80vw;
  height: 70vh;
  box-shadow: 0px 0px 12px 4px rgba(217, 217, 217, 0.5);
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  margin: auto;
  margin-top: 2em !important;
`;

export const halfBox = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const contentBox = styled.div`
  width: 32vw;
  height: 45vh;
  margin: auto;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  padding-left: 0px !important;
`;

export const halfLine = styled.div`
  width: 1px;
  height: 70vh;
  background-color: #d9d9d9;
`;

export const createImgBox = styled.div<{ img: string }>`
  background-image: url(http://10.150.149.25:3000${(props) => props.img});
  background-repeat: no-repeat;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  margin-top: 2em;
  background-size: cover;
  background-position: center;
  width: 50vh;
  height: 50vh;
  margin: auto;
`;

export const lineIndex = styled.div`
  font-size: 20px;
`;

export const keywordBoxBond = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 20vw;
  height: 2.5em;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5em;
  padding-left: 1em !important;
`;

export const keywordBoxChild = styled.div`
  font-size: 16px;
  padding: 0.5em;
  padding-left: 0.8em !important;
  padding-right: 0.8em !important;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
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
