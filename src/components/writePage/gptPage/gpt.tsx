import React, { useLayoutEffect, useState } from "react";
import * as S from "./styleGpt";
import styled from "styled-components";
import { Header } from "../../index";
import axios from "axios";
import CustomAxios from "../../../axios/customAxios";

interface StateProps {
  setState: React.Dispatch<
    React.SetStateAction<{
      page: number;
      postTitle: string;
      novel: string;
      title: string[];
      event: string[];
      background: string[];
      people: string[];
      keyword: string[];
    }>
  >;
  value: {
    page: number;
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
  };
}

const Gpt: React.FC<StateProps> = ({ setState, value }) => {
  const [loding, setLoding] = useState(false);

  const fetchData = async () => {
    try {
      setLoding(true);
      const res = await CustomAxios.post("api/generate/novel", {
        genre: value.title,
        key: value.keyword,
        character: value.people,
        event: value.event,
        background: value.background,
      });

      // 요청이 성공하면 이후의 로직을 수행합니다.
      const novelWithLineBreaks = res.data.result.replace(/\n/g, "<br>");
      setNovel(novelWithLineBreaks);
      setLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [novel, setNovel] = useState("");

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loding ? <div style={{ fontSize: "10em" }}>로딩중인것이와요</div> : null}
      <Header />
      <S.boxPostion>
        <Column type={"space-between"}>
          <div
            onClick={() => {
              setState((props) => ({
                ...props,
                page: 1,
              }));
            }}
          >
            {"<"}키워드 입력 다시하기
          </div>
          <div>2 / 3</div>
        </Column>
        <S.mainGptPage>
          <Column type="center">
            <S.halfBox>
              <S.addTitle
                placeholder="제목을 입력하세요"
                onChange={(e) => {
                  setState((props) => ({
                    ...props,
                    postTitle: e.target.value,
                  }));
                }}
              ></S.addTitle>
              <S.gptNovel
                dangerouslySetInnerHTML={{ __html: novel }}
              ></S.gptNovel>
            </S.halfBox>
            <S.halfLine></S.halfLine>
            <S.halfBox>
              <S.keywordBox>
                <Column type="end">
                  <S.rowIndex>장르</S.rowIndex>
                  <S.wordBoxLine>
                    {value.title.map((title, index) => (
                      <S.wordBox key={index}>{title}</S.wordBox>
                    ))}
                  </S.wordBoxLine>
                </Column>
                <Column type="end">
                  <S.rowIndex>키워드</S.rowIndex>
                  <S.wordBoxLine>
                    {value.keyword.map((keyword, index) => (
                      <S.wordBox key={index}>{keyword}</S.wordBox>
                    ))}
                  </S.wordBoxLine>
                </Column>
                <Column type="end">
                  <S.rowIndex>사건</S.rowIndex>
                  <S.wordBoxLine>
                    {value.event.map((event, index) => (
                      <S.wordBox key={index}>{event}</S.wordBox>
                    ))}
                  </S.wordBoxLine>
                </Column>
                <Column type="end">
                  <S.rowIndex>등장인물</S.rowIndex>
                  <S.wordBoxLine>
                    {value.people.map((people, index) => (
                      <S.wordBox key={index}>{people}</S.wordBox>
                    ))}
                  </S.wordBoxLine>
                </Column>
                <Column type="end">
                  <S.rowIndex>배경</S.rowIndex>
                  <S.wordBoxLine>
                    {value.background.map((background, index) => (
                      <S.wordBox key={index}>{background}</S.wordBox>
                    ))}
                  </S.wordBoxLine>
                </Column>
              </S.keywordBox>
              <S.rowLine></S.rowLine>
              <Column type={"center"}>
                <S.createButton
                  type={true}
                  onClick={() => {
                    fetchData();
                  }}
                >
                  재생성
                </S.createButton>
                <div style={{ width: "2vw" }}></div>
                <S.createButton
                  type={false}
                  onClick={() => {
                    setState((prev) => ({
                      ...prev,
                      page: 3,
                    }));
                  }}
                >
                  다음
                </S.createButton>
              </Column>
            </S.halfBox>
          </Column>
        </S.mainGptPage>
      </S.boxPostion>
    </>
  );
};

const Column = styled.div<{ type: string }>`
  display: flex;
  justify-content: ${(props) => props.type};
  align-items: center;
  gap: 1em;
`;

export default Gpt;
