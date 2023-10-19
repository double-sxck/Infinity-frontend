import styled from "styled-components";

export const loginBackground = styled.div`
  background: rgba(
    0,
    0,
    0,
    0.5
  ); /* 0.5는 반투명 정도를 나타냅니다 (0부터 1까지) */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* 다른 요소 위에 표시되도록 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mainLoginPage = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: white;
`;

export const loginMode = styled.div`
  width: 40vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const loginModeButtonLogin = styled.div<{ mode: boolean }>`
  width: 15vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => (props.mode ? "" : "4px solid black")};
  font-weight: ${(props) => (props.mode ? "" : 900)};
`;

export const loginModeButtonJoin = styled.div<{ mode: boolean }>`
  width: 15vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => (props.mode ? "4px solid black" : "")};
  font-weight: ${(props) => (props.mode ? 900 : "")};
`;

export const loginHeader = styled.div`
  background-color: black;
  width: 40vw;
  height: 6vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const closeButton = styled.div`
  align-self: flex-start;
  background-color: none;
  height: 1em;
  margin-top: 10vh;
  margin-left: 0.5em;
`;

export const displayTable = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 세로 가운데 정렬을 설정합니다 */
`;

export const inputTitle = styled.div`
  margin-top: 1em;
  width: 30vw;
`;

export const inputContainer = styled.div`
  border: 1px solid black;
  height: 1.5em;
  width: 30vw;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5em;
`;

export const finisButton = styled.div`
  width: 30vw;
  height: 2em;
  color: white;
  background-color: #9a9a9a;
  margin-top: 2em;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
