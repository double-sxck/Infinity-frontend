// Header.tsx

import * as S from "./headerStyle";
import React, { useState } from "react";
import Login from "../login/login";
import { ReactComponent as Logo } from "../../assets/images/infinityLogo.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin && <Login setIsState={setIsLogin} />}
      <S.headerBody>
        <S.logoBackground>
          <Logo width="100" height="40" />
        </S.logoBackground>
        <S.searchBox
          type="text"
          placeholder="---의 모든 작품 검색"
        ></S.searchBox>
        <S.postionFiexd>
          <S.loginButton>
            <S.buttonText onClick={() => setIsLogin(true)}>로그인</S.buttonText>
          </S.loginButton>
          <S.loginButton>
            <S.buttonText onClick={() => setIsLogin(true)}>가입</S.buttonText>
          </S.loginButton>
          <S.headerButtons to="/write">
            <S.buttonLink to="/write">업로드</S.buttonLink>
          </S.headerButtons>
        </S.postionFiexd>
      </S.headerBody>
    </>
  );
};

export default Header;
