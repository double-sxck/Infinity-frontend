import styled from "styled-components";
import HeartIcon from "../../../assets/images/heart";
import CommentIcon from "../../../assets/images/comment";
import { Link } from "react-router-dom";

type Border = {
  boardId: number;
  title1: string;
  novel: string;
  character: string;
  keyword: string;
  event: string;
  background: string;
  userUniqueId: number;
  userName: string;
  created: string;
  views: number;
  likes: number;
  backImage: string;
};

const NovCard: React.FC<Border> = (props: any) => {
  return (
    <div style={{ marginBottom: 10, width: "15em" }}>
      <LinkToPage to={`/novel/${props.boardId}`}>
        <CardBackground img={props.backImage}>
          <KeyBox>
            {props.keyword
              .replace(/ /g, "")
              .split(",")
              .slice(0, 3)
              .map((splitKeyword: string, index: number) => (
                <KeyWordBox key={index}>{splitKeyword}</KeyWordBox>
              ))}
          </KeyBox>
        </CardBackground>
        <CardUnderLine>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: 15 }}
          >
            <HeartIcon width={10} height={10} />
            <UnderLineText>{props?.likes}</UnderLineText>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CommentIcon width={10} height={10} />
            <UnderLineText>{props?.views}</UnderLineText>
          </div>
          <div></div>
          <UnderLineText style={{ marginRight: 20 }}>123</UnderLineText>
        </CardUnderLine>
        <FlexBox>
          <Title>{props?.title1}</Title>
          <Writer>{props?.userName}</Writer>
        </FlexBox>
      </LinkToPage>
    </div>
  );
};

export default NovCard;

const CardBackground = styled.div<{ img: string }>`
  background-color: #d9d9d9;
  height: 16em;
  width: 15em;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover; /* 이미지를  커버하도록 설정 */
  background-position: center; /* 이미지를 가운데로 정렬 */
  display: flex;
  justify-content: center;
  align-items: flex-end; /* 이미지 아래에 내용을 배치합니다. */
  background-image: url(https://infinitynovel.kro.kr${({ img }) =>
    img}); //url에서 줄바꿈이 일어나서 에러가 남
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const Title = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  max-width: 7em;
  height: 1.5em;
  text-align: center;
  border-bottom: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Writer = styled.div`
  padding-left: 0.3em;
  padding-right: 0.3em;
  max-width: 5em;
  height: 1.5em;
  text-align: center;
  border-bottom: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardUnderLine = styled.div`
  background-color: black;
  width: 15em;
  height: 2em;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UnderLineText = styled.h1`
  color: white;
`;

const KeyBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const KeyWordBox = styled.div`
  font-size: 12px;
  padding: 10px;
  background-color: #9a9a9a;
  border-radius: 12px;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
`;

const LinkToPage = styled(Link)`
  text-decoration: none;
  color: black;
`;
