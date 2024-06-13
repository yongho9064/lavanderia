import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Logo from "../common/Logo";
import { AuthContext } from "../../Context";

const navLinks = [
    { path: "/application", label: "신청하기" },
    { path: "/community", label: "커뮤니티" },
    { path: "/servicecenter", label: "고객센터" },
];

interface AuthLink {
    path: string;
    label: string;
    onClick?: () => void;
}

const Navigation: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const authLinks: AuthLink[] = isLoggedIn
        ? [
            { path: "/", label: "로그아웃", onClick: handleLogout },
            { path: "/mypage", label: "마이페이지" },
        ]
        : [
            { path: "/auth/login", label: "로그인" },
            { path: "/auth/agreement", label: "회원가입" },
        ];

    const allLinks: AuthLink[] = [...navLinks, ...authLinks];

    const handleLinkClick = (link: AuthLink) => {
        setMenuOpen(false);
        if (link.onClick) {
            link.onClick();
        }
    };

    return (
        <div className="sticky top-0 font-roboto font-semibold z-50 bg-white shadow text-base">
            <div className="mx-auto flex h-auto w-full flex-col p-5 lg:h-16 lg:w-2/3 lg:flex-row lg:items-center lg:justify-center lg:p-0">
                <div className="flex w-full items-center justify-between lg:mb-0 lg:w-auto lg:justify-start">
                    <Logo handleLinkClick={() => setMenuOpen(false)} />
                    <button
                        className="block lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <HiMenu className="w-6 h-6 text-black" />
                    </button>
                </div>
            </div>
            <div
                className={`w-full flex-col gap-0 ${
                    menuOpen ? "flex" : "hidden"
                } lg:flex  lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:gap-20 `}
            >
                <ul className="flex sm:text-center flex-col w-full items-start lg:flex-row justify-between lg:items-center lg:space-x-4">
                    {allLinks.map((link) => (
                        <React.Fragment key={link.path}>
                            <li className="mt-1 lg:m-1.5 w-full lg:w-auto">
                                <Link
                                    to={link.path}
                                    className="block py-2 text-black lg:text-black text-lg lg:text-base"
                                    onClick={() => handleLinkClick(link)}
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
            </div>
        </div>
    );
};

export default Navigation;
