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
    <div
      style={{
        width: "100%",
        minWidth: "fit-content",
        backgroundColor: "white",
      }}
    >
      <LinkToPage to={`/novel/${props.boardId}`}>
        <CardBackground img={props.backImage}>
          <KeyBox>
            {props.keyword !== "" &&
              props.keyword
                .replace(/ /g, "")
                .split(",")
                .slice(0, 3)
                .map((splitKeyword: string, index: number) => (
                  <KeyWordBox key={index}>{splitKeyword}</KeyWordBox>
                ))}
          </KeyBox>
        </CardBackground>
        <CardUnderLine>
          <UnderLineText>조회 {props?.views}</UnderLineText>
          <UnderLineText>{props?.created.replaceAll("-", ".")}</UnderLineText>
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
  height: 30rem;
  width: 100%;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
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
  width: 100%;
  justify-content: space-between;
  margin-top: 1em;
`;

const Title = styled.div`
  padding-left: 0.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 10em;
  height: 2em;
  border-bottom: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: 900;
`;

const Writer = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 0.3em;
  padding-right: 0.3em;
  width: 5em;
  height: 2em;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardUnderLine = styled.div`
  background-color: black;
  width: 100%;
  height: 3em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UnderLineText = styled.h1`
  color: white;
  font-weight: bold;
  padding: 0 1rem;
  white-space: nowrap;
`;

const KeyBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const KeyWordBox = styled.div`
  font-size: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #9a9a9a;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
`;

const LinkToPage = styled(Link)`
  text-decoration: none;
  color: black;
`;
