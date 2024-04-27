import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-[750px] w-[600px] flex-col items-center gap-2 bg-white text-center">
        <div className="flex h-32 w-full items-center justify-center ">
          <span className="font-courgette text-5xl">
            <Link to="/">lavanderia</Link>
          </span>
        </div>
        <div className="w-full">
          <div className="mb-6 text-base text-gray-500">
            <span className="font-courgette">lavanderia </span>
            <span className="font-roboto font-extrabold">계정으로 로그인</span>
          </div>
        </div>
        <div className="mb-5 flex w-full flex-col items-center justify-center gap-5 ">
          <input
            className="h-12 w-3/4 rounded border border-gray-400 p-3 placeholder-gray-600 placeholder:text-base "
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <input
            className="h-12 w-3/4 rounded border border-gray-400 p-3 placeholder-gray-600 placeholder:text-base"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="w-3/4 pl-0">
            <label className="flex cursor-pointer select-none items-center">
              <input className="mx-2" type="checkbox" />
              <span>로그인 상태 유지</span>
            </label>
          </div>
        </div>
        <div className="mb-5 flex w-full items-center justify-center">
          <button className="h-14 w-3/4 rounded-full border bg-neutral-400 text-xl font-bold text-white">
            로그인
          </button>
        </div>
        <div className="mb-5 w-3/4 text-sm font-bold text-gray-500">
          <Link to="/auth/find">아이디 찾기 | 비밀번호 찾기 </Link>
          <Link to="/auth/signup">| 회원가입</Link>
        </div>
        <div className="mb-5">
          <div className="mb-5 text-base font-bold text-gray-500">
            소셜 로그인
          </div>
          <div className="flex gap-10">
            <button>
              <img src="/img/google.png" alt="Google" className="h-12" />
            </button>
            <button>
              <img src="/img/naver.png" alt="Naver" className="h-12" />
            </button>
            <button>
              <img src="/img/apple.png" alt="Apple" className="h-12" />
            </button>
            <button>
              <img src="/img/kakao.png" alt="Kakao" className="h-12" />
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <span className="text-base font-bold text-gray-500">
            * 소셜계정과 기존 lavanderia 계정은 서로 연동되지 않으니 이용에
            참고해주시기 바랍니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
