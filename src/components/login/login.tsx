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

  const [mode, setMode] = useState(false);

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
      </S.mainLoginPage>
      <S.closeButton>
        <button onClick={handleLogin}>나가기</button>
      </S.closeButton>
    </S.loginBackground>
  );
};

export default Login;
