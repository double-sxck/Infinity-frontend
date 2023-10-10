import * as S from "./headerStyle";
import { ReactComponent as Logo } from "../../assets/images/infinityLogo.svg";

const Header = () => {
  return (
    <>
      <S.headerBody>
        <S.logoBackground>
          <Logo width="100" height="40" />
        </S.logoBackground>
      </S.headerBody>
    </>
  );
};

export default Header;
