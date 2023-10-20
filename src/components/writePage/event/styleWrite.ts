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
  gap: 67px;
`;

export const writeBox = styled.div`
  width: 80vw;
  height: calc(95vh - 10rem);
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding-right: 20px;
  margin-top: 2em;
  box-shadow: 0 4px 6px rgba(0, 0, 0.1, 0.1);
`;

export const boxHeaderButton = styled.div<{ ty: boolean }>`
  width: 6em;
  padding: 0.5em;
  text-align: center;
  border: 1px solid #9a9a9a;
  border-radius: 12px;
  background-color: ${(props) => (props.ty ? "white" : "#CCF0FF")};
  border: ${(props) => (props.ty ? "1px solid #9a9a9a" : null)};
`;

export const divBody = styled.div`
  display: center;
  align-items: center;
  justify-content: center;
`;
export const personDiv = styled.div`
  display: flex;
  padding-left: 30px;
`;
export const genreDiv = styled.div`
  display: flex;
  gap: 60px;
`;
export const insertBody = styled.div`
  display: flex;
  padding: 40px 10px 10px 10px;
  gap: 30px;
`;
export const sageonDiv = styled.div`
  display: flex;
  padding-left: 30px;
  gap: 10px;

  align-items: center;
  gap: "0.5em";
`;
export const inputBoxLow = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  height: 3em;
`;
export const nameDiv = styled.div`
  gap: 20px;
  border: none;
  border-radius: 10px;
`;
export const nameInput = styled.input`
  background-color: #f5f5f5;
  width: 70px;
`;
export const inputBoxBig = styled.input`
  background-color: #f5f5f5;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  height: 3em;
  width: 84%;
`;

export const marginTop = styled.div`
  margin-top: 4em;
  gap: 5px;
`;

export const wordBoxBond = styled.div`
  height: 7em;
  width: 6em;
  padding: 1em;
  padding-top: 20px;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
`;

export const wordBoxBondLong = styled.div`
  height: 7em;
  padding: 1em;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
  padding-top: 20px;
  min-width: 14em;
  max-width: 14em;
`;

export const overContentBond = styled.div`
  position: relative;
  padding-top: 10px;
`;

export const overContentChild = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  top: -3px;
  left: 45%;
  transform: translate(-50%);
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  text-align: center;
  width: 80px;
  height: 30px;
  box-shadow: 5px gray;
`;

export const wordBoxChild = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  text-align: center;
  font-size: 0.8em;
  padding-left: 10px !important;
  padding-right: 10px !important;
  padding: 5px;

  margin-top: 4px;
`;
