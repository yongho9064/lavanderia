import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex  h-16 items-center justify-between font-roboto">
        <div>
          <Link to="/">
            <h1 className="text-3xl text-blue-500 ">lavanderia</h1>
          </Link>
        </div>
        <ul className="ml-auto flex  items-center  space-x-4">
          <li className="m-1.5">
            <Link to="/application">신청하기</Link>
          </li>
          <li>
            <Link to="/premium">프리미엄</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="servicecenter">고객센터</Link>
          </li>
        </ul>
        <ul className="ml-auto  flex  space-x-4">
          <li>
            <Link to="/auth/login">로그인</Link>
          </li>
          <li>
            <Link to="/auth/signup">회원가입</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
