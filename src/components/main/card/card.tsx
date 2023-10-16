import styled from "styled-components";
import HeartIcon from "../../../assets/images/heart";
import CommentIcon from "../../../assets/images/comment";

const NovCard = () => {
  return (
    <div style={{ marginBottom: 10, width: "15em" }}>
      <CardBackground>
        <KeyBox>
          <KeyWordBox>키워드</KeyWordBox>
          <KeyWordBox>두자</KeyWordBox>
          <KeyWordBox>긴키워드</KeyWordBox>
        </KeyBox>
      </CardBackground>
      <CardUnderLine>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 15 }}>
          <HeartIcon width={10} height={10} />
          <UnderLineText>123</UnderLineText>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CommentIcon width={10} height={10} />
          <UnderLineText>123</UnderLineText>
        </div>
        <div></div>
        <UnderLineText style={{ marginRight: 20 }}>123</UnderLineText>
      </CardUnderLine>
      <FlexBox>
        <Title>제목</Title>
        <Writer>김재목</Writer>
      </FlexBox>
    </div>
  );
};

export default NovCard;

const CardBackground = styled.div`
  background-color: #d9d9d9;
  height: 16em;
  width: 15em;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-image: url();
  display: flex;
  justify-content: center;
  align-items: end;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  height: 1.5em;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Writer = styled.div`
  padding-left: 0.3em;
  padding-right: 0.3em;
  height: 1.5em;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 5px;
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
