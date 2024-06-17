import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Context 생성
interface AuthContextType {
  isLoggedIn: boolean;
  access: string;
  login: (access: string, rememberMe: boolean) => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isLoggedIn: false,
  access: '',
  login: () => {},
  logout: () => {}
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [access, setAccess] = useState("");

  useEffect(() => {
    const storedAccess = window.localStorage.getItem("access") || window.sessionStorage.getItem("access");

    // 리멤버미로 바꾸기
    if (storedAccess) {
      setAccess(storedAccess);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (access: string, rememberMe: boolean) => {
    setIsLoggedIn(true);
    setAccess(access);
    if (rememberMe) {
      window.localStorage.setItem("access", access);
    } else {
      window.sessionStorage.setItem("access", access);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setAccess("");
    window.localStorage.removeItem("access");
    window.sessionStorage.removeItem("access");
  };

  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const response = await axios.post("/refresh-token", { refreshToken });
      const { access: newAccess } = response.data;
      setAccess(newAccess);
      if (window.localStorage.getItem("access")) {
        window.localStorage.setItem("access", newAccess);
      } else {
        window.sessionStorage.setItem("access", newAccess);
      }
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      logout();
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, access, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
