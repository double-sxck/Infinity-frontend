// Login.tsx

import { useState } from "react";
import * as S from "./styleLogin";
import axios, { AxiosResponse } from "axios";
import CustomAxios from "../../axios/customAxios";

axios.defaults.withCredentials = true;

type User = {
  name: string;
  id: string;
  pw: string;
};

type UserPostType = {
  userUniqueId: number;
  userId: string;
  password: string;
};

interface LoginProps {
  setIsState: React.Dispatch<
    React.SetStateAction<{ popup: boolean; login: boolean }>
  >;
}

const Login: React.FC<LoginProps> = ({ setIsState }) => {
  const handleLogin = () => {
    setIsState((prev) => ({
      ...prev,
      popup: false,
    }));
  };

  const userHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const [mode, setMode] = useState(false);
  const [pwMode, setPwMode] = useState(true);
  const [user, setUser] = useState<{
    name: string;
    id: string;
    pw: string;
  }>({
    name: "",
    id: "",
    pw: "",
  });

  function setCookie(cookie_name: any, value: any, days: any) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
    var cookie_value =
      escape(value) + (days == null ? "" : ";expires=" + exdate.toUTCString());
    document.cookie = cookie_name + "=" + cookie_value;
  }

  const isLogin = async () => {
    try {
      console.log("로그인중");
      console.log(user.id);
      console.log(user.pw);
      const response = await CustomAxios.post(
        "http://10.150.151.198:3000/api/user/login",
        {
          userId: user.id,
          password: user.pw,
        }
      );
      // 성공적으로 로그인한 경우의 처리
      console.log("로그인 성공", response.data);
      setIsState((prev) => ({
        ...prev,
        login: true,
      }));
      // 이후 추가적인 로직을 수행하거나 응답 데이터를 사용할 수 있습니다.
    } catch (error) {
      // 오류 발생 시의 처리
      console.error("로그인 오류", error);
      // 예외 처리, 사용자에게 오류 메시지 표시 또는 다른 작업 수행
    }
  };

  const isJoin = async () => {
    console.log("회원가입중");

    try {
      const response = await CustomAxios.post("/api/user/register", {
        userId: user.id,
        password: user.pw,
        userName: user.name,
      });

      // 성공적으로 회원가입한 경우의 처리
      console.log("회원가입 성공", response.data);
      // 이후 추가적인 로직을 수행하거나 응답 데이터를 사용할 수 있습니다.
    } catch (error) {
      // 오류 발생 시의 처리
      console.error("회원가입 오류", error);
      // 예외 처리, 사용자에게 오류 메시지 표시 또는 다른 작업 수행
    }
  };

  return (
    <S.loginBackground>
      <S.mainLoginPage>
        <S.loginHeader>회원 가입 / 로그인</S.loginHeader>
        <S.loginMode>
          <S.loginModeButtonJoin
            mode={!!mode}
            onClick={() => {
              setMode(true);
            }}
          >
            회원 가입
          </S.loginModeButtonJoin>
          <div style={{ width: 10, fontSize: 30 }}>/</div>
          <S.loginModeButtonLogin
            mode={!!mode}
            onClick={() => {
              setMode(false);
            }}
          >
            로그인
          </S.loginModeButtonLogin>
        </S.loginMode>
        <S.displayTable>
          {mode ? (
            <>
              <S.inputTitle>사용자 이름</S.inputTitle>

              <S.inputContainer>
                <input
                  type="text"
                  name="name"
                  placeholder="사용자 이름"
                  style={{ border: "none", outline: "none" }}
                  onChange={userHandle}
                ></input>
              </S.inputContainer>
            </>
          ) : null}
          <S.inputTitle>아이디</S.inputTitle>

          <S.inputContainer>
            <input
              type="text"
              name="id"
              placeholder="사용자 이름"
              style={{ border: "none", outline: "none" }}
              onChange={userHandle}
            ></input>
          </S.inputContainer>
          <S.inputTitle>비밀번호</S.inputTitle>
          <S.inputContainer>
            <input
              type={pwMode ? "password" : "text"}
              name="pw"
              placeholder="사용자 이름"
              style={{
                border: "none",
                outline: "none",
              }}
              onChange={userHandle}
            ></input>
            <div style={{ marginRight: 20 }} onClick={() => {}}>
              버튼
            </div>
          </S.inputContainer>
          <S.finisButton
            onClick={() => {
              mode ? isJoin() : isLogin();
            }}
          >
            {mode ? "가입" : "로그인"}
          </S.finisButton>
        </S.displayTable>
      </S.mainLoginPage>
      <S.closeButton>
        <button onClick={handleLogin}>나가기</button>
      </S.closeButton>
    </S.loginBackground>
  );
};

export default Login;
function useCallBack(arg0: () => void) {
  throw new Error("Function not implemented.");
}
