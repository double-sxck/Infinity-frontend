import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./styleMain";
import * as C from "./mainHeader";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/infinityLogo.svg";
import KeyboardArrowUpIcon from "../../../assets/images/viewArrowUp";
import Card from "../card/card";
import axios from "axios";
import CustomAxios from "../../../axios/customAxios";
import { ReactComponent as SearchIcon } from "../../../assets/images/search.svg";

type Border = {
  boardId: number;
  title: string;
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
  image: string;
};

const Main = () => {
  const [view, setView] = useState(true);
  const [list, setList] = useState("최신");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Array<Border>>([]);

  const location = useLocation();

  useLayoutEffect(() => {
    const query = location.state;
    console.log(query);
    if (query !== null) {
      fetchSearch(query);
    } else {
      fetchData1();
    }
  }, []);

  useEffect(() => {
    if (list === "오래된") {
      fetchData1();
    } else if (list === "추천") {
      fetchData2();
    } else {
      fetchData3();
    }
  }, [list]);

  const fetchData1 = async () => {
    const res = await CustomAxios.get("api/board/method/date");
    console.log(res.data);
    setData(res.data); // 데이터 업데이트
  };
  const fetchData2 = async () => {
    const res = await CustomAxios.get("api/board/method/popular");
    console.log(res.data);
    setData(res.data); // 데이터 업데이트
  };
  const fetchData3 = async () => {
    const res = await CustomAxios.get("api/board");
    console.log(res.data);
    setData(res.data); // 데이터 업데이트
  };

  const fetchSearch = async (data: string) => {
    try {
      const res = await CustomAxios.get("api/search", {
        params: { title: data },
      });
      setData(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const seachHandle = (e: any) => {
    setSearch(e.target.value);
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      fetchSearch(search);
    }
  };

  return (
    <>
      <C.headerBody>
        <C.logoUploadBody>
          <C.logoBackground>
            <Link to="/">
              <Logo width="160" height="64" />
            </Link>
          </C.logoBackground>
          <C.headerButtons to="/write">
            <C.buttonLink to="/write">업로드</C.buttonLink>
          </C.headerButtons>
        </C.logoUploadBody>
        <C.searchOutBox>
          <SearchIcon
            style={{ position: "relative", left: "35px", margin: "auto 0" }}
          />
          <C.searchBox
            type="text"
            placeholder="인피니티의 모든 작품 검색"
            onChange={seachHandle}
            onKeyDown={seachHandle}
          ></C.searchBox>
        </C.searchOutBox>
      </C.headerBody>
      <S.box></S.box>
      <S.settingBar>
        <S.settingBar>
          <S.selectBox>키워드</S.selectBox>
          <S.selectBox>두자</S.selectBox>
          <S.selectBox>긴키워드</S.selectBox>
        </S.settingBar>
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
      <S.gridPage>
        {data.map((item) => (
          <Card
            boardId={item.boardId}
            title1={item.title}
            novel={item.novel}
            character={item.character}
            keyword={item.keyword}
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
    </>
  );
};

export default Main;
