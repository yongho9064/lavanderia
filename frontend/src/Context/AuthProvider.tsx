import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { authenticateAccess } from '../Utils/auth/tokenService';
import { decryptToken, encryptToken } from '../Utils/auth/crypto'

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
    const encryptedAccess = window.localStorage.getItem("access");
    const rememberMe = window.localStorage.getItem("rememberMe");

    if (encryptedAccess && rememberMe) {
      console.log(encryptedAccess)
      const storedAccess = decryptToken(encryptedAccess);
      console.log(storedAccess)
      if (storedAccess) {
        authenticateAccessToken(storedAccess);
      } else {
        logout();
      }
    }
  }, []);

  const authenticateAccessToken = async (token: string) => {
    try {
      const data = await authenticateAccess(token);
      const newAccess = data.access || token;
      setAccess(newAccess); // 새로운 액세스 토큰이 있으면 설정하고, 없으면 기존 토큰 유지
      setIsLoggedIn(true);
      if (window.localStorage.getItem("rememberMe") && data.access) {
        window.localStorage.setItem("access", encryptToken(newAccess));
      }
    } catch (error) {
      console.error("Failed to authenticate or refresh access token:", error);
      // logout();
    }
  };

  const login = (access: string, rememberMe: boolean) => {
    setIsLoggedIn(true);
    setAccess(access);
    if (rememberMe) {
      window.localStorage.setItem("access", encryptToken(access));
      window.localStorage.setItem("rememberMe", "true");
    }
  };

  const logout = () => {
      setIsLoggedIn(false);
      setAccess("");
      window.localStorage.removeItem("access");
      window.localStorage.removeItem("rememberMe");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, access, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
