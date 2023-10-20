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
  background-color: #CCF0FF;
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
