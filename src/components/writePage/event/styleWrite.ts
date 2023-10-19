import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const writeBox = styled.div`
  width: 80vw;
  height: calc(90vh - 10rem);
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  margin-top: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0.1, 0.1);
`;

export const boxHeaderButton = styled.div<{ ty: boolean }>`
  width: 6em;
  padding: 0.5em;
  text-align: center;
  border: 1px solid black;
  border-radius: 25px;
  background-color: ${(props) => (props.ty ? "white" : "#CCF0FF")};
  border: ${(props) => (props.ty ? "1px solid black" : null)};
`;

export const inputBoxLow = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  height: 3em;
`;

export const inputBoxBig = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  height: 3em;
  width: 80%;
`;

export const marginTop = styled.div`
  margin-top: 4em;
`;

export const wordBoxBond = styled.div`
  height: 8em;
  width: 6em;
  padding: 1em;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
`;

export const wordBoxBondLong = styled.div`
  height: 7em;
  padding: 1em;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
  min-width: 14em;
  max-width: 14em;
`;

export const overContentBond = styled.div`
  position: relative;
  padding-top: 10px;
`;

export const overContentChild = styled.div`
  position: absolute;
  background-color: white;
  top: -3px;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  padding: 3px;
  width: 100px;
  box-shadow: 5px gray;
`;

export const wordBoxChild = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  text-align: center;
  font-size: 0.8em;
  padding-left: 10px !important;
  padding-right: 10px !important;
  padding: 5px;
  margin-top: 3px;
`;
