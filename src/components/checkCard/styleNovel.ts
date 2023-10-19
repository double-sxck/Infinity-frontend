import styled from "styled-components";
import { Link } from "react-router-dom";

export const nextPost = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mainPage = styled.div`
  width: 80vw;
  height: 70vh;
  border-radius: 20px;
  box-shadow: 0px 0px 12px 4px rgba(217, 217, 217, 0.5);
`;

export const halfBox = styled.div`
  width: 40vw;
  height: 70vh;
`;

export const titleText = styled.div`
  font-size: 28px;
  padding: 1em;
`;

export const halfLine = styled.div`
  width: 1px;
  height: 70vh;
  background-color: #d9d9d9;
  margin-right: 1em;
`;

export const novelText = styled.div`
  height: 60vh;
  font-size: 20px;
  padding-left: 1em;
  margin-top: 0.2em;
  word-wrap: break-word;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const profileImage = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: green;
  background-image: url();
`;

export const keywordBox = styled.div`
  padding: 0.5em;
  padding-left: 0.7em !important;
  padding-right: 0.7em !important;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const chatImage = styled.div<{ img: string }>`
  width: 2em;
  height: 2em;
  background-color: green;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
`;

export const chatUserName = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const chatValue = styled.div`
  font-size: 16px;
  word-wrap: break-word;
`;

export const chatInput = styled.input`
  border-radius: 10px;
  width: 34vw;
  height: 2em;
  margin: auto;
  border: 1px solid #d9d9d9;
`;
