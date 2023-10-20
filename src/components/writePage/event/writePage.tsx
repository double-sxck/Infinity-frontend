import React, { useEffect, useState } from "react";
import * as S from "./styleWrite";
import { Header } from "../../index";
import AddButton from "../../../assets/images/addButton";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await CustomAxios.get("api/user/logincheck");
        console.log(res);
        // 비동기 작업 완료 후 처리할 로직을 여기에 추가할 수 있습니다.
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        // 오류가 발생한 경우 여기에서 적절한 오류 처리를 수행할 수 있습니다.
      }
    };
    fetchData(); // fetchData 함수를 호출하여 데이터를 가져옵니다.
  }, []); // 의존성 배열이 빈 배열인 경우, useEffect는 컴포넌트가 마운트될 때 한 번만 실행됩니다.

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
            <p
              style={{
                marginLeft: "1em",
                fontSize: "18px",
                paddingTop: "1em",
                paddingBottom: "1em",
              }}
            >
              원하는 소설의 구조를 작성하세요
            </p>
            <div style={{ display: "flex", paddingRight: "1em", gap: "2em" }}>
              <S.boxHeaderButton
                ty={true}
                onClick={() => {
                  setState((prev) => ({
                    ...prev,
                    keyword: [],
                    event: [],
                    people: [],
                    background: [],
                    title: [],
                  }));
                }}
              >
                초기화
              </S.boxHeaderButton>
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
              <S.Row style={{ gap: "0.5em" }}>
                <S.marginTop>
                  <div>장르</div>
                  <S.Row style={{ gap: "0.5em" }}>
                    <S.inputBoxLow
                      type="text"
                      placeholder="제목 입력"
                      value={newTitle}
                      onChange={handleTitleChange}
                    />
                    <div onClick={addTitle}>
                      <AddButton width={30} height={30}></AddButton>
                    </div>
                  </S.Row>
                </S.marginTop>
                <S.marginTop>
                  <div>키워드</div>
                  <S.Row style={{ gap: "0.5em" }}>
                    <S.inputBoxLow
                      type="text"
                      placeholder="이벤트 입력"
                      value={keyword}
                      onChange={handleKeywordChange}
                    />
                    <div onClick={updateKeyword}>
                      <AddButton width={30} height={30}></AddButton>
                    </div>
                  </S.Row>
                </S.marginTop>
              </S.Row>
              <S.marginTop>
                <div>사건</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5em",
                  }}
                >
                  <S.inputBoxBig
                    type="text"
                    placeholder="사건 추가"
                    value={newEvent}
                    onChange={handleEventChange}
                  />
                  <div onClick={addEvent}>
                    <AddButton width={30} height={30}></AddButton>
                  </div>
                </div>
              </S.marginTop>
              <S.marginTop>
                <S.Between>
                  <div>
                    <div>등장인물</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                      }}
                    >
                      <S.inputBoxLow
                        type="text"
                        placeholder="등장인물"
                        value={people}
                        onChange={handlePeopleChange}
                      />
                      <div onClick={updatePeople}>
                        <AddButton width={30} height={30}></AddButton>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>배경</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                      }}
                    >
                      <S.inputBoxLow
                        type="text"
                        placeholder="배경추가"
                        value={background}
                        onChange={handleBackgroundChange}
                      />
                      <div onClick={updateBackground}>
                        <AddButton width={30} height={30}></AddButton>
                      </div>
                    </div>
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
