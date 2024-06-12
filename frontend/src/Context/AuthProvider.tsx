import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Context 생성
interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  login: (accessToken: string, refreshToken: string, rememberMe: boolean) => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isLoggedIn: false,
  accessToken: '',
  refreshToken: '',
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
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    const storedAccessToken = window.localStorage.getItem("accessToken") || window.sessionStorage.getItem("accessToken");
    const storedRefreshToken = window.localStorage.getItem("refreshToken") || window.sessionStorage.getItem("refreshToken");

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setIsLoggedIn(true);
    } else if (storedRefreshToken) {
      refreshAccessToken(storedRefreshToken);
    }
  }, []);

  const login = (accessToken: string, refreshToken: string, rememberMe: boolean) => {
    setIsLoggedIn(true);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    if (rememberMe) {
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);
    } else {
      window.sessionStorage.setItem("accessToken", accessToken);
      window.sessionStorage.setItem("refreshToken", refreshToken);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
    setRefreshToken("");
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");

    window.sessionStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("refreshToken");

    window.localStorage.removeItem("rememberMe"); // rememberMe 값 제거
  };

  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const response = await axios.post("/refresh-token", { refreshToken });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      window.localStorage.setItem("accessToken", newAccessToken);
      window.localStorage.setItem("refreshToken", newRefreshToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      logout();
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
