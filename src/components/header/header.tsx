// Header.tsx

import * as S from "./headerStyle";
import React, { useState } from "react";
import Login from "../login/login";
import { ReactComponent as Logo } from "../../assets/images/logo_v2.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState({
    popup: false,
    login: false,
  });
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  const seachHandle = (e: any) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      (window as any).myGlobalVar = search;
    }
  };

  return (
    <>
      <S.container>
        <S.alignLeft>
          <Logo />
          <SearchIcon
            style={{ position: "relative", left: "35px", margin: "auto 0" }}
          />
          <S.searchBar placeholder="인피니티의 모든 작품 검색" />
        </S.alignLeft>
        <S.alignRight>
          <S.profileImage />
          <S.uploadBox to="/write">
            <S.uploadFont to="/write">업로드</S.uploadFont>
          </S.uploadBox>
        </S.alignRight>
      </S.container>
    </>
  );
};

export default Header;
