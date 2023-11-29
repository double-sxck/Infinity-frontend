// Header.tsx

import * as S from "./headerStyle";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo_v2.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { Link, useNavigate } from "react-router-dom";
import CustomAxios from "../../axios/customAxios";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Array<Border>>([]);
  const navigate = useNavigate();

  type Border = {
    boardId: number;
    title1: string;
    novel: string;
    character: string;
    event: string;
    background: string;
    userUniqueId: number;
    userName: string;
    created: string;
    views: number;
    likes: number;
    image: string;
  };

  const searchHandle = (e: any) => {
    setSearch(e.target.value);
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      navigate("/", { state: search });
    }
  };

  return (
    <>
      <S.container>
        <S.alignLeft>
          <Link to="/">
            <Logo width="240" height="96" />
          </Link>
          <SearchIcon
            style={{ position: "relative", left: "45px", margin: "auto 0" }}
          />
          <S.searchBar
            placeholder="인피니티의 모든 작품 검색"
            onChange={searchHandle}
            onKeyDown={searchHandle}
          />
        </S.alignLeft>
        <S.alignRight>
          <S.uploadFont to="/write">업로드</S.uploadFont>
        </S.alignRight>
      </S.container>
    </>
  );
};

export default Header;
