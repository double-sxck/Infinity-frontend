import React, { useState } from "react";
import * as S from "./styleMain";
import Header from "../../header/header";
import KeyboardArrowUpIcon from "../../../assets/images/viewArrowUp";
import Card from "../card/card";

const Main = () => {
  const [view, setView] = useState(true);
  const [list, setList] = useState("최신");

  return (
    <>
      <Header />
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
        <Card />
      </S.gridPage>
    </>
  );
};

export default Main;
