import React, { useState } from "react";
import * as S from "./styleWrite";
import { Header } from "../../index";

interface StateProps {
  setState: React.Dispatch<
    React.SetStateAction<{ title: string[]; event: string[] }>
  >;
  value: { title: string[]; event: string[] };
}

const Write: React.FC<StateProps> = ({ setState, value }) => {
  const [newTitle, setNewTitle] = useState(""); // 새로운 제목을 위한 state
  const [newEvent, setNewEvent] = useState(""); // 새로운 이벤트를 위한 state

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent(event.target.value);
  };

  const addTitle = () => {
    if (newTitle.trim() !== "") {
      // 빈 문자열이 아닌 경우에만 추가
      setState((prevState) => ({
        ...prevState,
        title: [...prevState.title, newTitle],
      }));
      setNewTitle(""); // 입력 필드 초기화
      console.log(value);
    }
  };

  const addEvent = () => {
    if (newEvent.trim() !== "") {
      // 빈 문자열이 아닌 경우에만 추가
      setState((prevState) => ({
        ...prevState,
        event: [...prevState.event, newEvent],
      }));
      setNewEvent(""); // 입력 필드 초기화
      console.log(value);
    }
  };

  return (
    <>
      <Header />
      <div style={{ height: "10rem" }}></div>
      <S.Row>
        <S.writeBox>
          <S.Between>
            <p>원하는 소설의 구조를 작성하세요</p>
            <div style={{ display: "flex" }}>
              <S.boxHeaderButton ty={true}>초기화</S.boxHeaderButton>
              <S.boxHeaderButton ty={false}>생성</S.boxHeaderButton>
            </div>
          </S.Between>
          <div
            style={{ width: "80vw", height: 1, backgroundColor: "#D9D9D9" }}
          ></div>
        </S.writeBox>
        <input
          type="text"
          placeholder="제목 입력"
          value={newTitle}
          onChange={handleTitleChange}
        />
        <button onClick={addTitle}>제목 등록</button>
        <input
          type="text"
          placeholder="이벤트 입력"
          value={newEvent}
          onChange={handleEventChange}
        />
        <button onClick={addEvent}>이벤트 등록</button>
        <div>
          <h3>Titles:</h3>
          <ul>
            {value.title.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
          <h3>Events:</h3>
          <ul>
            {value.event.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      </S.Row>
    </>
  );
};

export default Write;
