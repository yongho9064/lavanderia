import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const isUsernameValid = userId.trim() !== "";
    const isPasswordValid = password.trim() !== "";

    setIdError(!isUsernameValid);
    setPasswordError(!isPasswordValid);

    if (isUsernameValid && isPasswordValid) {
      try {
        const response = await axios.post("/signin", { userId, password });
        console.log("Server response:", response.headers.access);
        console.log("Server response:", response.headers.statusCode);

        window.localStorage.setItem("access", response.headers.access);

        const token = response.data.token;
        console.log("JWT:", token);
      } catch (error) {
        console.error("Error:");
      }
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
    setIdError(event.target.value.trim() === "");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.trim() === "");
  };

  const handleUsernameKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();

      setUserId(event.currentTarget.value);
      setIdError(event.currentTarget.value.trim() === "");

      if (passwordInputRef.current !== null) {
        passwordInputRef.current.focus();
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 lg:px-4 ">
      <div className=" flex h-full w-full flex-col items-center justify-center gap-8 rounded-lg bg-white p-6 text-center shadow md:h-[650px] md:w-[450px] md:gap-4 lg:gap-2">
        <div className="flex w-full items-center justify-center lg:h-20">
          <span className="font-courgette text-5xl">
            <Link to="/">lavanderia</Link>
          </span>
        </div>
        <div className="text-sm text-gray-500 md:text-base">
          <span className="font-roboto">lavanderia </span>
          <span className="font-roboto font-extrabold">계정으로 로그인</span>
        </div>

        <form className="w-full max-w-xs md:w-3/4" onSubmit={handleSubmit}>
          <div className="mb-5 flex w-full flex-col items-center justify-center gap-5">
            <input
              className={`h-12 w-full rounded border ${idError ? "border-red-400" : "border-gray-400"} p-3 placeholder-gray-600 placeholder:text-base`}
              type="text"
              name="username"
              placeholder="아이디를 입력해주세요"
              onChange={handleUsernameChange}
              onKeyDown={handleUsernameKeyDown}
            />

            <input
              className={`h-12 w-full rounded border ${passwordError ? "border-red-400" : "border-gray-400"} p-3 placeholder-gray-600 placeholder:text-base`}
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePasswordChange}
              ref={passwordInputRef}
            />
          </div>

          <label className="mb-5 flex cursor-pointer items-center">
            <input className="mx-2" type="checkbox" name="remember" />
            <span>로그인 상태 유지</span>
          </label>

          <button
            type="submit"
            className="h-12 w-full rounded-full border bg-neutral-400 text-lg font-bold text-white md:h-14 md:text-xl"
          >
            로그인
          </button>
        </form>

        <div className="mb-5 text-sm font-bold text-gray-500">
          <Link to="/auth/find">아이디 찾기 | 비밀번호 찾기 </Link>
          <Link to="/auth/agreement"> | 회원가입</Link>
        </div>
        <div className="mb-5">
          <div className="mb-5 text-base font-bold text-gray-500">
            소셜 로그인
          </div>
          <div className="flex gap-6 md:gap-10">
            <button>
              <img
                src="/img/google.png"
                alt="Google"
                className="h-10 md:h-12"
              />
            </button>
            <button>
              <img src="/img/naver.png" alt="Naver" className="h-10 md:h-12" />
            </button>
            <button>
              <img src="/img/kakao.png" alt="Kakao" className="h-10 md:h-12" />
            </button>
          </div>
        </div>
        <div className="w-full max-w-xs md:w-3/4">
          <span className="text-sm font-bold text-gray-500 md:text-base">
            * 소셜계정과 기존 lavanderia 계정은 서로 연동되지 않으니 이용에
            참고해주시기 바랍니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
