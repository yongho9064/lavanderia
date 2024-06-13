import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi"; // 리액트 아이콘 임포트
import { AuthContext } from "../../Context"; // AuthContext 임포트

// Define the JSON object for navigation links
const navLinks = [
  { path: "/application", label: "신청하기" },
  { path: "/cart", label: "세탁물 확인" },
  { path: "/community", label: "커뮤니티" },
  { path: "/servicecenter", label: "고객센터" },
];

const Navigation = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const path = event.currentTarget.getAttribute('href') || "/";
    if (path === "/cart" && !isLoggedIn) {
      event.preventDefault();
      navigate("/auth/login");
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const authLinks = isLoggedIn
    ? [
      { path: "/mypage", label: "마이페이지" },
      { path: "/", label: "로그아웃", onClick: handleLogout },
    ]
    : [
      { path: "/auth/login", label: "로그인" },
      { path: "/auth/agreement", label: "회원가입" },
    ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-auto w-full flex-col p-5  lg:h-16 lg:w-2/3 lg:flex-row lg:items-center lg:justify-between lg:p-0">
        <div className="flex w-full items-center justify-between lg:mb-0 lg:w-auto lg:justify-start">
          <Link to="/" onClick={handleLinkClick}>
            <h1 className="text-3xl font-semibold font-Gugi">세탁 하루</h1>
          </Link>
          <button
            className="block lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenu className="w-6 h-6 text-black" /> {/* 리액트 아이콘 사용 */}
          </button>
        </div>
        <div
          className={`w-full flex-col gap-0 ${menuOpen ? "flex" : "hidden"} lg:flex lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:gap-20`}
        >
          <ul className="flex font-roboto font-semibold flex-col items-start space-y-1 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                <li className="mt-1 lg:m-1.5 w-full lg:w-auto">
                  <Link
                    to={link.path}
                    className="block py-2 text-black lg:text-black text-lg lg:text-base"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
                <li className="lg:hidden">
                  <hr className="w-full border-t border-gray-200" />
                </li>
              </React.Fragment>
            ))}
          </ul>
          <ul className="flex flex-col font-roboto font-semibold items-start space-y-1 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
            {authLinks.map((link) => (
              <React.Fragment key={link.path}>
                <li className="mt-1 lg:m-1.5 w-full lg:w-auto">
                  {link.onClick ? (
                    <button
                      className="block py-2 text-black lg:text-black text-lg lg:text-base"
                      onClick={link.onClick}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.path} className="block py-2 text-black lg:text-black text-lg lg:text-base" onClick={handleLinkClick}>
                      {link.label}
                    </Link>
                  )}
                </li>
                <li className="lg:hidden">
                  <hr className="w-full border-t border-gray-200" />
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
