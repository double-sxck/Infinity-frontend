import * as S from "../style";
import { ReactComponent as Pencel } from "../../../assets/images/pencel.svg";

const ThumbnailPage = () => {
  return (
    <S.container>
      <Pencel />
      <S.Message>AI가 썸네일을 만드는 중...</S.Message>
    </S.container>
  );
};

export default ThumbnailPage;
