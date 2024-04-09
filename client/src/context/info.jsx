import React, { useContext, useState } from "react";

const InfoContext = React.createContext();

export const InfoProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const storeToken = (token) => {
    setToken(token);
  };

  const storeUser = (user) => {
    setUserInfo(user);
  };

  const login = (token, user) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserInfo(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken("");
    setUserInfo({});
  };

  const value = {
    isLoggedIn,
    token,
    userInfo,
    storeToken,
    storeUser,
    login,
    logout,
    setUserInfo,
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export const useInfo = () => {
  return useContext(InfoContext);
};
