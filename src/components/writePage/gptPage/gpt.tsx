import React, { useLayoutEffect, useState } from "react";
import * as S from "./styleGpt";
import styled from "styled-components";
import { Header } from "../../index";
import CustomAxios from "../../../axios/customAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WritingPage from "../../loading/writing";

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
      userName: string;
    }>
  >;
  value: {
    page: number;
    postTitle: string;
    novel: string;
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
  };
}

const Gpt: React.FC<StateProps> = ({ setState, value }) => {
  const [loding, setLoding] = useState(false);
  const notify = () => toast.error("제목 입력하세요!!");
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
      setState((props) => ({
        ...props,
        novel: novelWithLineBreaks,
      }));
      setLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);
  if (!loding) {
    return (
      <>
        <Header />
        <S.boxPostion>
          <div>
            <ToastContainer />
          </div>
          <Column type={"space-between"}>
            <div
              onClick={() => {
                setState((props) => ({
                  ...props,
                  page: 1,
                }));
              }}
            >
              {"<"} 키워드 입력 다시하기
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
                  dangerouslySetInnerHTML={{ __html: value.novel }}
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
                      if (value.postTitle !== "") {
                        setState((prev) => ({
                          ...prev,
                          page: 3,
                        }));
                      } else {
                        notify();
                      }
                    }}
                  >
                    다음
                  </S.createButton>
                  <ToastContainer
                    position="top-right"
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </Column>
              </S.halfBox>
            </Column>
          </S.mainGptPage>
        </S.boxPostion>
      </>
    );
  } else {
    return <WritingPage />;
  }
};

const Column = styled.div<{ type: string }>`
  display: flex;
  justify-content: ${(props) => props.type};
  align-items: center;
  gap: 1em;
`;

export default Gpt;
