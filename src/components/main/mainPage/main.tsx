import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./styleMain";
import Header from "../../header/header";
import KeyboardArrowUpIcon from "../../../assets/images/viewArrowUp";
import Card from "../card/card";
import axios from "axios";
import CustomAxios from "../../../axios/customAxios";

type Border = {
  boardId: number;
  title: string;
  novel: string;
  character: string;
  event: string;
  background: string;
  userUniqueId: number;
  userName: string;
  created: string;
  views: number;
  likes: number;
  image: string;
};

const Main = () => {
  const [view, setView] = useState(true);
  const [list, setList] = useState("최신");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Array<Border>>([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const res = await CustomAxios.get("api/board");
      console.log(res.data);
      setData(res.data); // 데이터 업데이트
    };
    fetchData(); // API 요청 수행
  }, []);

  // const fetchListData = async () => {
  //   let res; // res 변수를 여기서 선언

  //   if (list === "오래된순") {
  //     console.log("오래");
  //     res = await CustomAxios.get("api/board/method/data"); // 변수 res에 결과 저장
  //     setData(res.data);
  //   } else if (list === "추천") {
  //     console.log("추천");
  //     res = await CustomAxios.get("api/board/method/popular"); // 변수 res에 결과 저장
  //     setData(res.data);
  //   } else {
  //     console.log("최신순");
  //     res = await CustomAxios.get("api/board"); // 변수 res에 결과 저장
  //     setData(res.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchListData();
  // }, [list]);

  return (
    <>
      <Header />
      <S.box></S.box>
      <S.settingBar>
        <S.RowBox>
          <S.selectBox
            onClick={() => {
              setView((prev) => {
                return !prev ? true : false;
              });
            }}
          >
            {list}
            {view && (
              <>
                <S.arrowButtonDown>
                  <div>
                    <KeyboardArrowUpIcon />
                  </div>
                </S.arrowButtonDown>
              </>
            )}
            {view === false && (
              <S.arrowButtonUp>
                <KeyboardArrowUpIcon />
              </S.arrowButtonUp>
            )}
          </S.selectBox>
          {view === false && (
            <S.selectOptionBar>
              <S.selectOption
                onClick={() => {
                  setList("최신");
                  setView(true);
                }}
              >
                <S.selectText>최신</S.selectText>
              </S.selectOption>
              <S.selectOption
                onClick={() => {
                  setList("추천");
                  setView(true);
                }}
              >
                <S.selectText>추천</S.selectText>
              </S.selectOption>
              <S.selectOption
                onClick={() => {
                  setList("오래된");
                  setView(true);
                }}
              >
                <S.selectText>오래된</S.selectText>
              </S.selectOption>
            </S.selectOptionBar>
          )}
        </S.RowBox>
      </S.settingBar>
      <S.gridOutPage>
        <S.gridPage>
          {data.map((item) => (
            <Card
              boardId={item.boardId}
              title={item.title}
              novel={item.novel}
              character={item.character}
              event={item.event}
              background={item.background}
              userUniqueId={item.userUniqueId}
              userName={item.userName}
              created={item.created}
              views={item.views}
              likes={item.likes}
              backImage={item.image}
              key={item.boardId} // key를 포함시키는 것이 좋습니다.
            />
          ))}
        </S.gridPage>
      </S.gridOutPage>
    </>
  );
};

export default Main;
