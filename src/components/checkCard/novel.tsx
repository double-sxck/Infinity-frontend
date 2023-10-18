import styled from "styled-components";
import React from "react";
import * as S from "./styleNovel";
import { Header } from "../index";
import { useParams } from "react-router-dom";
import NextIcon from "../../assets/images/nextnove";
import ProvIcon from "../../assets/images/provnove";
import ClickHeart from "../../assets/images/clickHeart";

const CheckNovel = () => {
  const { Id } = useParams();
  const novelId = Id ? Id : 0; // 만약 Id가 undefined면 0으로 초기화

  return (
    <>
      <Header />
      <div style={{ height: "5em" }}></div>
      <div style={{ margin: "2em" }}>
        <Between>
          <S.nextPost to={`/novel/1`}>
            <NextIcon width={40} height={40} />
          </S.nextPost>
          <S.mainPage>
            <Between>
              <S.halfBox>
                <Between></Between>
                <S.titleText>제목들이갈곳</S.titleText>
                <S.novelText>겁나긴 gpt가 써준 문장 들어갈 곳</S.novelText>
              </S.halfBox>
              <S.halfLine></S.halfLine>
              <S.halfBox>
                <Between>
                  <Column1 style={{ marginTop: "2em" }}>
                    <S.profileImage></S.profileImage>
                    <div style={{ fontSize: "20px" }}>닉이름</div>
                  </Column1>
                  <div style={{ alignSelf: "start" }}>게시일 1000.00.00</div>
                </Between>
                <ColumnEnd>
                  <S.keywordBox>키</S.keywordBox>
                </ColumnEnd>
                <Column1>
                  <h1 style={{ fontSize: "20px" }}>댓글</h1>
                </Column1>
                <Column1
                  style={{ gap: "0.5em", marginTop: "2em", marginLeft: "1em" }}
                >
                  <S.chatImage></S.chatImage>
                  <S.chatUserName>언도운</S.chatUserName>
                  <S.chatValue>씹노잼addsdf</S.chatValue>
                </Column1>
                <Between style={{ marginTop: "5em" }}>
                  <div>댓글 5개</div>
                  <Column>
                    <div>123</div>
                    <ClickHeart width={30} height={30} />
                  </Column>
                </Between>
                <Column1>
                  <S.chatImage></S.chatImage>
                  <S.chatInput
                    type="text"
                    placeholder="댓글 추가"
                  ></S.chatInput>
                </Column1>
              </S.halfBox>
            </Between>
          </S.mainPage>
          <S.nextPost to={`/novel/1`}>
            <ProvIcon width={40} height={40} />
          </S.nextPost>
        </Between>
      </div>
    </>
  );
};

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column1 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ColumnEnd = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1em;
  width: 100%;
  overflow: hidden;
`;

const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export default CheckNovel;
