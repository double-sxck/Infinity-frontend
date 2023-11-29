import styled from "styled-components";
import Search from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

export const container = styled.div`
  width: 100%;
  height: 9vh;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const alignLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 35px;
`;

export const searchBar = styled.input`
  width: 66.7%;

  background-color: #f5f5f5;
  padding: 24px 60px;
  border-radius: 30px;
  font-size: x-large;
  font-size: x-large;
  border: none;
  font-family: Pretendard;
`;

export const alignRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 35px;
`;

export const profileImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: black;
`;

export const uploadFont = styled(Link)`
  padding: 20px 40px;
  border-radius: 20px;
  background-color: #ccf0ff;
  color: black;
  font-weight: 900;
  font-size: x-large;
  text-decoration: none;
  word-break: keep-all;
  margin-right: 3rem;
`;
