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
      {isLogin.popup && <Login setIsState={setIsLogin} />}
      <S.headerBody>
        <S.logoBackground>
          <Logo width="100" height="40" />
        </S.logoBackground>
        <S.searchBox
          type="text"
          placeholder="---의 모든 작품 검색"
          onChange={seachHandle}
          onKeyDown={seachHandle}
        ></S.searchBox>
        <S.postionFiexd>
          {isLogin.login ? (
            <S.loginButton>
              <S.buttonText>로그아웃</S.buttonText>
            </S.loginButton>
          ) : (
            <>
              <S.loginButton>
                <S.buttonText
                  onClick={() =>
                    setIsLogin((prev) => ({
                      ...prev,
                      popup: true,
                    }))
                  }
                >
                  로그인
                </S.buttonText>
              </S.loginButton>
              <S.loginButton>
                <S.buttonText
                  onClick={() =>
                    setIsLogin((prev) => ({
                      ...prev,
                      popup: true,
                    }))
                  }
                >
                  가입
                </S.buttonText>
              </S.loginButton>
            </>
          )}
          <S.headerButtons to="/write">
            <S.buttonLink to="/write">업로드</S.buttonLink>
          </S.headerButtons>
        </S.postionFiexd>
      </S.headerBody>
    </>
  );
};

export default Header;
