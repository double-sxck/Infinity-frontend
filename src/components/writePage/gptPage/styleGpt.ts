import styled from "styled-components";

export const mainGptPage = styled.div`
  box-shadow: 0px 0px 12px 4px rgba(217, 217, 217, 0.5);
  width: 80vw;
  height: 70vh;
  margin: auto;
  margin-top: 1em;
`;

export const boxPostion = styled.div`
  padding: 10vw;
  padding-top: 3em !important;
  padding-bottom: 0;
`;

export const halfBox = styled.div`
  width: 40vw;
  padding: 2em;
  align-self: flex-start;
`;

export const addTitle = styled.input`
  border-radius: 20px;
  border: none;
  background-color: #f5f5f5;
  width: 32vw;
  height: 40px;
  margin: auto;
  padding-left: 1em;
  font-size: 16px;
  margin-bottom: 1em !important;
`;

export const gptNovel = styled.div`
  font-size: 20px;
  line-height: 24px;
  word-wrap: break-word; /* 추가: 긴 단어가 잘리지 않도록 함 */
  overflow-wrap: break-word; /* 추가: 텍스트가 줄바꿈되도록 함 */
  hyphens: auto; /* 추가: 필요한 경우 단어를 분리하여 줄바꿈함 */
  overflow-y: scroll;
  height: 55vh;
`;

export const halfLine = styled.div`
  height: 68vh;
  width: 1px;
  background-color: #d9d9d9;
  margin-right: 1em;
`;

export const keywordBox = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  width: 35vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const rowLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 3em;
  margin-bottom: 2em;
`;

export const createButton = styled.div<{ type: boolean }>`
  border: ${(props) => (props.type ? "1px solid #9a9a9a" : "none")};
  background-color: ${(props) => (props.type ? "white" : "#CCF0FF")};
  border-radius: 15px;
  width: 8em;
  font-weight: bold;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const rowIndex = styled.div`
  font-size: 20px;
`;

export const wordBoxLine = styled.div`
  width: 23vw;
  height: 4vh;
  margin-right: 2em;
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  padding: 0.5em 1em;
  gap: 1vw;
`;

export const wordBox = styled.div`
  font-size: 12px;
  line-height: 4vh;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 0 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
