import styled from "styled-components";

export const process = styled.div`
  margin: 0 auto;
  width: 80vw;
  text-align: right;
  padding-top: 6.7vh;
  padding-bottom: 2vh;
`;

export const vertical = styled.div`
  background-color: #d9d9d9;
  height: 60vh;
  width: 1px;
`;

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
  height: 70vh;
  box-shadow: 0px 0px 12px 4px rgba(217, 217, 217, 0.5);
`;

export const boxHeaderButton = styled.div<{ ty: boolean }>`
  width: 6em;
  padding: 0.5em;
  text-align: center;
  border-radius: 12px;
  background-color: ${(props) => (props.ty ? "white" : "#CCF0FF")};
  border: ${(props) => (props.ty ? "1px solid #9a9a9a" : "none")};
`;

export const divBody = styled.div`
  display: center;
  align-items: center;
  justify-content: center;
  width: 40vw;
`;
export const personDiv = styled.div`
  display: flex;
  gap: 5vh;
  align-items: center;
  justify-content: center;
`;
export const genreDiv = styled.div`
  display: flex;
  gap: 5vh;
  align-items: center;
  justify-content: center;
`;
export const sageonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const nameDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const nameInput = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  height: 3em;
`;
export const inputBoxLow = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  height: 3em;
  width: 11vw;
`;
export const inputBoxBig = styled.input`
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  height: 3em;
  width: calc(28vw - 4px);
`;

export const marginTop = styled.div`
  margin-top: 7vh;
  gap: 5px;
`;

export const insertBody = styled.div`
  display: flex;
  gap: 3vw;
  margin: 3vh auto;
  height: 20vh;
`;
export const wordBoxBond = styled.div`
  height: 15vh;
  width: 5vw;
  padding: 1em;
  padding-top: 1.3em;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
`;

export const wordBoxBondLong = styled.div`
  height: 15vh;
  width: 15.2vw;
  padding: 1em;
  padding-top: 1.3em;
  border: 1px solid #d9d9d9;
  overflow-y: scroll;
`;

export const overContentBond = styled.div`
  position: relative;
  padding-top: 10px;
`;

export const overContentChild = styled.div`
  display: flex;
  width: 80px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  margin: 0 auto -2vh;
`;

export const wordBoxChild = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;
  font-size: 0.8em;
  padding: 1vh 1vw;
  margin-top: 1vh;
`;

export const info = styled.div`
  margin: 3vh;
  width: 95%;
  text-align: right;
`;
