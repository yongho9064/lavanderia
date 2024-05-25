import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define the JSON object for navigation links
const navLinks = [
  { path: "/application", label: "신청하기" },
  { path: "/premium", label: "프리미엄" },
  { path: "/community", label: "커뮤니티" },
  { path: "/servicecenter", label: "고객센터" },
];

const authLinks = [
  { path: "/auth/login", label: "로그인" },
  { path: "/auth/agreement", label: "회원가입" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-auto flex h-auto w-full flex-col px-5 pt-5 font-roboto lg:h-16 lg:w-2/3 lg:flex-row lg:items-center lg:justify-between lg:p-0">
      <div className="flex w-full items-center justify-between lg:mb-0 lg:w-auto lg:justify-start">
        <Link to="/">
          <h1 className="text-3xl text-blue-500">lavanderia</h1>
        </Link>
        <button
          className="block lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776; {/* This is the hamburger icon */}
        </button>
      </div>
      <div
        className={`w-full flex-col gap-0 ${menuOpen ? "flex" : "hidden"} lg:flex lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:gap-20`}
      >
        <ul className="flex flex-col items-start lg:flex-row lg:items-center lg:space-x-4">
          {navLinks.map((link) => (
            <li key={link.path} className="mt-2 lg:m-1.5">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-start lg:flex-row lg:items-center lg:space-x-4">
          {authLinks.map((link) => (
            <li key={link.path} className="mt-2 lg:m-1.5">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
