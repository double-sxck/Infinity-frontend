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
  height: 3.75rem;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  padding: 0 3.75rem;
  font-size: 1rem;
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

export const uploadBox = styled(Link)`
  width: 100px;
  height: 40px;
  background-color: #ccf0ff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const uploadFont = styled(Link)`
  color: black;
  font-weight: 900;
  font-size: 1em;
  text-decoration: none;
`;
