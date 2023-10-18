import * as S from "./styleImage";
import styled from "styled-components";
import React, { useState } from "react";
import { Header } from "../../index";

interface StateProps {
  value: {
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
  };
}

const CreateImg: React.FC<StateProps> = ({ value }) => {
  return (
    <>
      <Header />
      <div style={{ height: "5em" }}></div>
      <S.mainImgPage>
        <Column type={"space-between"}>
          <S.halfBox>
            <div style={{ textAlign: "center", marginTop: "2em" }}>
              썸네일에 포함하고 싶은 키워드를 선택하세요
            </div>
            <S.contentBox>
              <Column type={"end"}>
                <S.lineIndex>장르</S.lineIndex>
                <S.keywordBoxBond>
                  {value.title.map((prev, index) => (
                    <S.keywordBoxChild key={index}>{prev}</S.keywordBoxChild>
                  ))}
                </S.keywordBoxBond>
              </Column>
              <Column type={"end"}>
                <S.lineIndex>키워드</S.lineIndex>
                <S.keywordBoxBond>
                  {value.keyword.map((prev, index) => (
                    <S.keywordBoxChild key={index}>{prev}</S.keywordBoxChild>
                  ))}
                </S.keywordBoxBond>
              </Column>
              <Column type={"end"}>
                <S.lineIndex>사건</S.lineIndex>
                <S.keywordBoxBond>
                  {value.event.map((prev, index) => (
                    <S.keywordBoxChild key={index}>{prev}</S.keywordBoxChild>
                  ))}
                </S.keywordBoxBond>
              </Column>
              <Column type={"end"}>
                <S.lineIndex>등장인물</S.lineIndex>
                <S.keywordBoxBond>
                  {value.people.map((prev, index) => (
                    <S.keywordBoxChild key={index}>{prev}</S.keywordBoxChild>
                  ))}
                </S.keywordBoxBond>
              </Column>
              <Column type={"end"}>
                <S.lineIndex>배경</S.lineIndex>
                <S.keywordBoxBond>
                  {value.background.map((prev, index) => (
                    <S.keywordBoxChild key={index}>{prev}</S.keywordBoxChild>
                  ))}
                </S.keywordBoxBond>
              </Column>
            </S.contentBox>
          </S.halfBox>
          <S.halfLine></S.halfLine>
          <S.halfBox>
            <S.createImgBox></S.createImgBox>
            <Column
              type={"between"}
              style={{ paddingRight: "2em", paddingLeft: "2em" }}
            >
              <S.createButton ty={true}>재생성</S.createButton>
              <S.createButton ty={false}>게시</S.createButton>
            </Column>
          </S.halfBox>
        </Column>
      </S.mainImgPage>
    </>
  );
};

const Column = styled.div<{ type: string }>`
  display: flex;
  justify-content: ${(prev) => prev.type};
  align-items: center;
  gap: 1em;
`;

export default CreateImg;
