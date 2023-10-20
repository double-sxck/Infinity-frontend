import styled from "styled-components";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./styleNovel";
import { Header } from "../index";
import { useParams } from "react-router-dom";
import NextIcon from "../../assets/images/nextnove";
import ProvIcon from "../../assets/images/provnove";
import ClickHeart from "../../assets/images/clickHeart";
import axios from "axios";

const customHeaders = {
  "Custom-Header-Name": "Custom-Header-Value",
};

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

type Chat = {
  borderId: number;
  commentId: number;
  comment: string;
  userUniqueId: number;
  userName: string;
  created: string;
};

const CheckNovel = () => {
  const { Id } = useParams();
  const novelId = Id ? parseInt(Id, 10) : 0; // 만약 Id가 undefined면 0으로 초기화
  const [data, setData] = useState<Array<Border>>([]);
  const [chatData, setChatData] = useState<Array<Chat>>([]);

  useLayoutEffect(() => {
    console.log(novelId);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://ec2-43-202-10-202.ap-northeast-2.compute.amazonaws.com/api/board/${novelId}`
        );
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("데이터 가져오기 오류1:", error);
        // 오류가 발생한 경우 여기에서 적절한 오류 처리를 수행하실 수 있습니다.
      }
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://ec2-43-202-10-202.ap-northeast-2.compute.amazonaws.com/api/comment/${novelId}`,
          {
            headers: customHeaders,
          }
        );
        setChatData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("데이터 가져오기 오류2:", error);
        // 오류가 발생한 경우 여기에서 적절한 오류 처리를 수행하실 수 있습니다.
      }
    };
    fetchData();
  }, []);

  const [chat, setChat] = useState("");

  const handleChat = async (e: any) => {
    if (e.key === "Enter") {
      console.log("send");
      try {
        if (chat.replace(/\s/g, "") !== "") {
          console.log("성공");
          const res = await axios.post(
            "http://ec2-43-202-10-202.ap-northeast-2.compute.amazonaws.com/api/comment",
            {
              borderId: data[0].boardId,
              comment: chat,
            },
            {
              headers: customHeaders,
            }
          );
          // 댓글을 보낸 후 input의 value를 초기화
          setChat("");
          console.log("초기화");
        }
      } catch (error) {
        console.log("댓글 post error", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div style={{ height: "5em" }}></div>
      <div style={{ margin: "2em" }}>
        <Between>
          <S.nextPost to={`/novel/${novelId - 1}`}>
            <NextIcon width={40} height={40} />
          </S.nextPost>
          <S.mainPage>
            <Between>
              <S.halfBox>
                <S.titleText>{data[0]?.title}</S.titleText>
                <S.novelText>{data[0]?.novel}</S.novelText>
              </S.halfBox>
              <S.halfLine></S.halfLine>
              <S.halfBox>
                <S.date>게시일 : {data[0]?.created.slice(0, -9).replaceAll('-', '.')}</S.date>
                <Column1> 
                  <S.profileImage />
                  <div style={{ fontSize: "20px" }}>닉이름</div>
                </Column1>
                <ColumnEnd>
                  <S.keywordBox>키</S.keywordBox>
                  <S.keywordBox>키</S.keywordBox>
                </ColumnEnd>
                <Column1>
                  <S.comment>댓글</S.comment>
                </Column1>
                <S.chatBox>
                  {/* {chatData.map((props) => { */}
                    <S.chat>
                      <S.chatImage img={data[0]?.image}></S.chatImage>
                      <S.chatValue>{chatData[0]?.comment}</S.chatValue>
                    </S.chat>
                    <S.chat>
                      <S.chatImage img={data[0]?.image}></S.chatImage>
                      <S.chatValue>{chatData[0]?.comment}</S.chatValue>
                    </S.chat>
                    <S.chat>
                      <S.chatImage img={data[0]?.image}></S.chatImage>
                      <S.chatValue>dkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdk</S.chatValue>
                    </S.chat>
                    <S.chat>
                      <S.chatImage img={data[0]?.image}></S.chatImage>
                      <S.chatValue>{chatData[0]?.comment}</S.chatValue>
                    </S.chat>
                    <S.chat>
                      <S.chatImage img={data[0]?.image}></S.chatImage>
                      <S.chatValue>{chatData[0]?.comment}</S.chatValue>
                    </S.chat>
                    <S.chat>
                      <S.chatImage img={data[0]?.image}></S.chatImage>
                      <S.chatValue>{chatData[0]?.comment}</S.chatValue>
                    </S.chat>
                  {/* })} */}
                </S.chatBox>
                <S.horizontal />
                <Between>
                  <S.commentNumber>댓글 5개</S.commentNumber>
                  <Column>
                    <S.likeNumber>{data[0]?.likes}1</S.likeNumber>
                    <ClickHeart width={40} height={40} />
                  </Column>
                </Between>
                <Column1>
                  <S.commentImage />
                  <S.chatInput
                    type="text"
                    placeholder="댓글 추가"
                    value={chat} // input의 value를 chat 상태와 연결
                    onChange={(e) => {
                      setChat(e.target.value); // input의 값이 변경될 때 chat 상태 업데이트
                    }}
                    onKeyDown={handleChat}
                  ></S.chatInput>
                </Column1>
              </S.halfBox>
            </Between>
          </S.mainPage>
          <S.nextPost to={`/novel/${novelId + 1}`}>
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
  width: 95%;
  overflow: hidden;
`;

const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

export default CheckNovel;
