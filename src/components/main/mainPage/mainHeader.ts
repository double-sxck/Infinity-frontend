// import styled from "styled-components";
// import Search from "../../assets/images/search.svg";
// import { Link } from "react-router-dom";

// export const headerBody = styled.div`
//   width: 100vw;
//   height: 4.6em;
//   background-color: #000000;
//   top: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-left: 1em;
// `;

// export const logoBackground = styled.div`
//   width: 100px;
//   height: 2.5em;
//   background-color: white;
//   margin-right: auto;
// `;

// export const headerButtons = styled(Link)`
//   width: 5em;
//   height: 2em;
//   background-color: #f5f5f5;
//   border-radius: 24px;
//   margin-left: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
// `;

// export const loginButton = styled.div`
//   width: 4em;
//   height: 2em;
//   background-color: #f5f5f5;
//   border-radius: 24px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   margin-left: 1em;
// `;

// export const buttonText = styled.div`
//   color: black;
//   font-weight: 900;
//   font-size: 0.7em;
// `;

// export const buttonLink = styled(Link)`
//   color: black;
//   font-weight: 900;
//   font-size: 0.7em;
// `;

// export const searchBox = styled.input`
//   width: 50vw;
//   height: 3em;
//   border-radius: 30px;
//   padding-left: 40px; /* 아이콘과 텍스트 간의 간격을 조절하기 위해 추가 */
//   &::placeholder {
//     background-image: url("../../assets/images/search.svg");
//     background-size: contain;
//     background-position: left center; /* 아이콘을 왼쪽에 배치 */
//     background-repeat: no-repeat;
//   }
// `;

// export const postionFiexd = styled.div`
//   display: flex;
//   right: 30px;
// `;

import styled from "styled-components";
import Search from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

export const headerBody = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #000000;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const logoBackground = styled.div`
  width: 160px;
  height: 64px;
  background-color: white;
  margin: 20px 40px auto;
`;
export const logoUploadBody = styled.div`
  width: 100vw;
  display: flex;
`;
export const headerButtons = styled(Link)`
  width: 100px;
  height: 40px;
  background-color: #ccf0ff;
  border-radius: 16px;
  margin: auto 40px 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const buttonLink = styled(Link)`
  color: black;
  font-weight: 900;
  font-size: 1em;
  text-decoration: none;
`;
export const searchOutBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
`;
export const searchBox = styled.input`
  width: 50vw;
  height: 48px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 0 60px;
  font-size: 16px;
`;

export const postionFiexd = styled.div`
  display: flex;
  right: 30px;
`;
