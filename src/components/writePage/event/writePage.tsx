import React, { useState } from "react";
import * as S from "./styleWrite";
import { Header } from "../../index";

interface StateProps {
  setState: React.Dispatch<
    React.SetStateAction<{
      page: number;
      title: string[];
      event: string[];
      background: string[];
      people: string[];
      keyword: string[];
    }>
  >;
  value: {
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
  };
}

const Write: React.FC<StateProps> = ({ setState, value }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [background, setBackground] = useState("");
  const [people, setPeople] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent(event.target.value);
  };

  const handleBackgroundChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setBackground(value);
  };

  const handlePeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(event.target.value);
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const addTitle = () => {
    if (newTitle.trim() !== "") {
      setState((prevState) => ({
        ...prevState,
        title: [...prevState.title, newTitle],
      }));
      setNewTitle("");
    }
  };

  const addEvent = () => {
    if (newEvent.trim() !== "") {
      setState((prevState) => ({
        ...prevState,
        event: [...prevState.event, newEvent],
      }));
      setNewEvent("");
    }
  };

  const updateBackground = () => {
    if (background.trim() !== "") {
      setState((prev) => ({
        ...prev,
        background: [...prev.background, background],
      }));
      setBackground("");
    }
  };

  const updatePeople = () => {
    if (people.trim() !== "") {
      setState((prev) => ({
        ...prev,
        people: [...prev.people, people],
      }));
    }
    setPeople("");
  };

  const updateKeyword = () => {
    if (keyword.trim() !== "") {
      setState((prev) => ({
        ...prev,
        keyword: [...prev.keyword, keyword],
      }));
      setKeyword("");
    }
  };

  const removePeople = (indexToRemove: any) => {
    setState((prev) => ({
      ...prev,
      people: prev.people.filter((_, index) => index !== indexToRemove),
    }));
  };

  const removeGenre = (indexToRemove: any) => {
    setState((prev) => ({
      ...prev,
      title: prev.title.filter((_, index) => index !== indexToRemove),
    }));
  };

  const removeEvent = (indexToRemove: any) => {
    setState((prev) => ({
      ...prev,
      event: prev.event.filter((_, index) => index !== indexToRemove),
    }));
  };

  const removeBackground = (indexToRemove: any) => {
    setState((prev) => ({
      ...prev,
      background: prev.background.filter((_, index) => index !== indexToRemove),
    }));
  };

  const removeKeyword = (indexToRemove: any) => {
    setState((prev) => ({
      ...prev,
      keyword: prev.keyword.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <>
      <Header />
      <div style={{ height: "4rem" }}></div>
      <S.Row>
        <S.writeBox>
          <S.Between>
            <p>원하는 소설의 구조를 작성하세요</p>
            <div style={{ display: "flex" }}>
              <S.boxHeaderButton ty={true}>초기화</S.boxHeaderButton>
              <S.boxHeaderButton
                ty={false}
                onClick={() => {
                  setState((prev) => ({
                    ...prev,
                    page: 2,
                  }));
                }}
              >
                생성
              </S.boxHeaderButton>
            </div>
          </S.Between>
          {/* 헤더 */}
          <div
            style={{
              width: "80vw",
              height: 1,
              backgroundColor: "#D9D9D9",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <div style={{ padding: "10px", width: "40vw" }}>
              <S.Row>
                <S.marginTop>
                  <div>장르</div>
                  <S.Between>
                    <S.inputBoxLow
                      type="text"
                      placeholder="제목 입력"
                      value={newTitle}
                      onChange={handleTitleChange}
                    />
                    <button onClick={addTitle}>등록</button>
                  </S.Between>
                </S.marginTop>
                <S.marginTop>
                  <div>키워드</div>
                  <S.Row>
                    <S.inputBoxLow
                      type="text"
                      placeholder="이벤트 입력"
                      value={keyword}
                      onChange={handleKeywordChange}
                    />
                    <button onClick={updateKeyword}>등록</button>
                  </S.Row>
                </S.marginTop>
              </S.Row>
              <S.marginTop>
                <div>사건</div>
                <S.inputBoxBig
                  type="text"
                  placeholder="사건 추가"
                  value={newEvent}
                  onChange={handleEventChange}
                />
                <button onClick={addEvent}>등록</button>
              </S.marginTop>
              <S.marginTop>
                <S.Between>
                  <div>
                    <div>등장인물</div>
                    <S.inputBoxLow
                      type="text"
                      placeholder="등장인물"
                      value={people}
                      onChange={handlePeopleChange}
                    />
                    <button onClick={updatePeople}>업데이트</button>
                  </div>
                  <div>
                    <div>배경</div>
                    <S.inputBoxLow
                      type="text"
                      placeholder="배경추가"
                      value={background}
                      onChange={handleBackgroundChange}
                    />
                    <button onClick={updateBackground}>업데이트</button>
                  </div>
                </S.Between>
              </S.marginTop>
            </div>
            <div style={{ padding: "20px", width: "40vw" }}>
              <S.Between>
                <S.overContentBond>
                  <S.overContentChild>장르</S.overContentChild>
                  <S.wordBoxBond>
                    {value.title.map((title, index) => (
                      <S.wordBoxChild
                        key={index}
                        onClick={() => removeGenre(index)}
                      >
                        {title}
                      </S.wordBoxChild>
                    ))}
                  </S.wordBoxBond>
                </S.overContentBond>
                <S.overContentBond>
                  <S.overContentChild>사건</S.overContentChild>
                  <S.wordBoxBondLong>
                    {value.event.map((event, index) => (
                      <S.wordBoxChild
                        key={index}
                        onClick={() => removeEvent(index)}
                      >
                        {event}
                      </S.wordBoxChild>
                    ))}
                  </S.wordBoxBondLong>
                </S.overContentBond>
              </S.Between>
              <div style={{ height: "5vh" }}></div>
              <S.Between>
                <S.overContentBond>
                  <S.overContentChild>키워드</S.overContentChild>
                  <S.wordBoxBond>
                    {value.keyword.map((keyword, index) => (
                      <S.wordBoxChild
                        key={index}
                        onClick={() => removeKeyword(index)}
                      >
                        {keyword}
                      </S.wordBoxChild>
                    ))}
                  </S.wordBoxBond>
                </S.overContentBond>
                <S.overContentBond>
                  <S.overContentChild>등장인물</S.overContentChild>
                  <S.wordBoxBond>
                    {value.people.map((people, index) => (
                      <S.wordBoxChild
                        key={index}
                        onClick={() => removePeople(index)}
                      >
                        {people}
                      </S.wordBoxChild>
                    ))}
                  </S.wordBoxBond>
                </S.overContentBond>
                <S.overContentBond>
                  <S.overContentChild>배경</S.overContentChild>
                  <S.wordBoxBond>
                    {value.background.map((background, index) => (
                      <S.wordBoxChild
                        key={index}
                        onClick={() => removeBackground(index)}
                      >
                        {background}
                      </S.wordBoxChild>
                    ))}
                  </S.wordBoxBond>
                </S.overContentBond>
              </S.Between>
            </div>
          </div>
        </S.writeBox>
      </S.Row>
    </>
  );
};

export default Write;
