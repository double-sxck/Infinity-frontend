// Header.tsx

import * as S from "./headerStyle";
import React, { useState } from "react";
import Login from "../login/login";
import { ReactComponent as Logo } from "../../assets/images/infinityLogo.svg";
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
      <S.headerBody>
        <S.logoUploadBody>
          <S.logoBackground>
            <Link to="/">
              <Logo width="160" height="64" />
            </Link>
          </S.logoBackground>
          <S.headerButtons to="/write">
            <S.buttonLink to="/write">업로드</S.buttonLink>
          </S.headerButtons>
        </S.logoUploadBody>
        <S.searchOutBox>
          <SearchIcon style={{ position:"relative",left:"35px", margin:"auto 0" }} />
          <S.searchBox
            type="text"
            placeholder="인피니티의 모든 작품 검색"
            onChange={seachHandle}
            onKeyDown={seachHandle}
          ></S.searchBox>
        </S.searchOutBox>
      </S.headerBody>
    </>
  );
};

export default Header;
