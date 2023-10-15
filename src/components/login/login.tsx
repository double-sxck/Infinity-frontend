// Login.tsx

import { useState } from "react";
import * as S from "./styleLogin";

interface LoginProps {
  setIsState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsState }) => {
  const handleLogin = () => {
    setIsState(false);
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
            <div style={{ marginRight: 20 }} onClick={() => setPwMode(!pwMode)}>
              버튼
            </div>
          </S.inputContainer>
          <S.finisButton>{mode ? "가입" : "로그인"}</S.finisButton>
        </S.displayTable>
      </S.mainLoginPage>
      <S.closeButton>
        <button onClick={handleLogin}>나가기</button>
      </S.closeButton>
    </S.loginBackground>
  );
};

export default Login;
