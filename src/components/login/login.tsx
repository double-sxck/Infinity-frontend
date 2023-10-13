// Login.tsx

import * as S from "./styleLogin";

interface LoginProps {
  setIsState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsState }) => {
  const handleLogin = () => {
    setIsState(false);
  };

  return (
    <S.loginBackground>
      <div>로그인 컴포넌트</div>
      <button onClick={handleLogin}>로그인</button>
    </S.loginBackground>
  );
};

export default Login;
