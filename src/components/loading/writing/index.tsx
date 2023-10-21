import * as S from "../style";
import { ReactComponent as Pencel } from "../../../assets/images/pencel.svg";

const WritingPage = () => {
  return (
    <S.container>
      <Pencel />
      <S.Message>AI가 소설을 쓰는 중...</S.Message>
    </S.container>
  );
};

export default WritingPage;
