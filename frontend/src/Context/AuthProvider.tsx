import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Context 생성
interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string;
  login: (accessToken: string, rememberMe: boolean) => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isLoggedIn: false,
  accessToken: '',
  login: () => {},
  logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const storedAccessToken = window.localStorage.getItem("accessToken") || window.sessionStorage.getItem("accessToken");
    const storedRefreshToken = window.localStorage.getItem("refreshToken") || window.sessionStorage.getItem("refreshToken");

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (accessToken: string, rememberMe: boolean) => {
    setIsLoggedIn(true);
    setAccessToken(accessToken);
    if (rememberMe) {
      window.localStorage.setItem("accessToken", accessToken);
    } else {
      window.sessionStorage.setItem("accessToken", accessToken);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
    window.localStorage.removeItem("accessToken");

    window.sessionStorage.removeItem("accessToken");

    window.localStorage.removeItem("rememberMe"); // rememberMe 값 제거
  };

  // // 로그인
  // const refreshAccessToken = async (refreshToken: string) => {
  //   try {
  //     const response = await axios.post("/refresh-token", { refreshToken });
  //     const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
  //     setAccessToken(newAccessToken);
  //     window.localStorage.setItem("accessToken", newAccessToken);
  //     setIsLoggedIn(true);
  //   } catch (error) {
  //     console.error("Failed to refresh access token:", error);
  //     logout();
  //   }
  // };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
