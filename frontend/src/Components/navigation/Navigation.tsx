import React from "react";
import { Link } from "react-router-dom";
import { FiBell, FiUser, FiShoppingCart } from "react-icons/fi";
import Logo from "../common/Logo";

const navLinks = [
  { path: "/application", label: "신청하기" },
  { path: "/community", label: "커뮤니티" },
  { path: "/secondhand", label: "중고장터" },
  { path: "/servicecenter", label: "고객센터" }
];

const Navigation: React.FC = () => {

  return (
    <div className="sticky top-0 z-50 bg-white shadow text-base">
      <div className="flex h-16 w-full items-center justify-between px-7">
        <div className="flex w-1/6 items-center justify-start">
          <FiBell className="h-6 w-6 text-black" />
        </div>
        <Logo/>
        <div className="flex w-1/6 items-center justify-end gap-2">
          <Link to="/mypage">
            <FiUser className="h-6 w-6 text-black" />
          </Link>
          <Link to="/cart">
            <FiShoppingCart className="h-6 w-6 text-black" />
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center px-5">
        <ul className="flex w-full items-center justify-between">
          {navLinks.map((link) => (
            <React.Fragment key={link.path}>
              <li className="m-1.5">
                <Link
                  to={link.path}
                  className="block py-2 text-black text-base"
                >
                  {link.label}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
