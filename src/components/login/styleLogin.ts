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
`;
