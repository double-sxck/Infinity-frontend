import * as S from "./headerStyle";
import { ReactComponent as Logo } from "../../assets/images/infinityLogo.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <S.headerBody>
        <S.logoBackground>
          <Logo width="100" height="40" />
        </S.logoBackground>
        <S.searchBox
          type="text"
          placeholder="---의 모든 작품 검색"
        ></S.searchBox>
        <S.postionFiexd>
          <S.headerButtons to="/login">
            <S.buttonText>로그인</S.buttonText>
          </S.headerButtons>
          <S.headerButtons to="/join">
            <S.buttonText>가입</S.buttonText>
          </S.headerButtons>
          <S.headerButtons to="/write">
            <S.buttonText>업로드</S.buttonText>
          </S.headerButtons>
        </S.postionFiexd>
      </S.headerBody>
    </>
  );
};

export default Header;
