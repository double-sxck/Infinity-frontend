import styled from "styled-components";
import { Link } from "react-router-dom";

export const nextPost = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mainPage = styled.div`
  width: 80vw;
  height: 75vh;
  border-radius: 20px;
  box-shadow: 0px 0px 12px 4px rgba(217, 217, 217, 0.5);
  margin: auto;
`;

export const halfBox = styled.div`
  width: 40vw;
  height: 70vh;
`;

export const titleText = styled.div`
  font-size: 28px;
  padding: 0 20px 30px;
  font-weight: 700;
`;

export const halfLine = styled.div`
  width: 1px;
  height: 75vh;
  background-color: #d9d9d9;
  margin-top: -16px;
  margin-right: 1em;
`;

export const novelText = styled.div`
  height: 60vh;
  font-size: 20px;
  line-height: 24px;
  padding: 0 20px;
  word-wrap: break-word;
  overflow-y: scroll;
`;

export const date = styled.div`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  margin: -1vh 10px 1vh 0;
`;

export const profileImage = styled.div<{ img: string }>`
  width: 3em;
  height: 3em;
  margin: 0 1vw 0 2vw;
  border-radius: 50%;
  background-color: white;
  background-image: url(https://infinitynovel.kro.kr/image/profiles/${(props) =>
    props.img});
  background-size: 3em 3em;
  background-repeat: no-repeat;
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
  font-size: 14px;
`;

export const comment = styled.div`
  font-size: 20px;
  font-weight: bolder;
  padding: 3vh;
  margin-top: 2vh;
`;

export const chatBox = styled.div`
  margin-left: 3vw;
  margin-bottom: 3vh;
  width: 35vw;
  max-height: 25vh;
  overflow: scroll;
`;

export const chat = styled.div`
  display: flex;
  text-align: left;
  width: 30vw;
  padding: 10px 0;
`;

export const chatImage = styled.div<{ img: string }>`
  width: 2em;
  height: 2em;
  background-color: white;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  margin-right: 1vw;
`;

export const chatValue = styled.div`
  width: 27vw;
  font-size: 16px;
  line-height: 20px;
  word-break: break-all;
  margin: auto 0;
`;
export const chatDate = styled.div`
  font-size: 15px;
`;
export const horizontal = styled.div`
  background-color: #d9d9d9;
  height: 2px;
  width: 105.8%;
  margin-left: -3%;
`;

export const commentNumber = styled.div`
  font-size: 20px;
`;

export const likeNumber = styled.div`
  font-size: 20px;
  text-align: right;
  margin-right: 10px;
`;

export const commentImage = styled.div`
  width: 3em;
  height: 3em;
  margin: 0 1vw 0;
  border-radius: 50%;
  background-color: white;
  background-image: url();
`;

export const chatInput = styled.input`
  border-radius: 10px;
  width: 28vw;
  height: 5vh;
  margin: auto;
  padding: 0 1vw;
  border: 1px solid #d9d9d9;
  font-size: 20px;
`;
