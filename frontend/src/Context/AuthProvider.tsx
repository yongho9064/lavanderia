import React, { createContext, useState, useEffect, ReactNode } from "react";

// Context 생성
interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  login: (accessToken: string, refreshToken: string) => void;
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

// Provider 컴포넌트 생성
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedAccessToken = window.localStorage.getItem("accessToken") || window.sessionStorage.getItem("accessToken");
    const storedRefreshToken = window.localStorage.getItem("refreshToken") || window.sessionStorage.getItem("refreshToken");
    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (accessToken: string, refreshToken: string) => {
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
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
