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
  border: 1px solid black;
  border-radius: 25px;
  background-color: ${(props) => (props.ty ? "white" : "#CCF0FF")};
  border: ${(props) => (props.ty ? "1px solid black" : null)};
`;
