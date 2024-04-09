import React, { useContext, useState } from "react";

const InfoContext = React.createContext();

export const InfoProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const [selectedDog, setSelectedDog] = useState({});
  const [selectedGoal, setSelectedGoal] = useState({});
  const [dogByOwner, setDogByOwner] = useState([]);
  const [showSelectDog, setShowSelectDog] = useState(null);
  const [showSelectGoal, setShowSelectGoal] = useState(null);
  const [dogValue, setDogValue] = useState({});
  const [userById, setUserById] = useState({});
  const [tasks, setTasks] = useState([]);

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
    selectedDog,
    setSelectedDog,
    selectedGoal,
    setSelectedGoal,
    dogByOwner,
    setDogByOwner,
    showSelectDog,
    setShowSelectDog,
    showSelectGoal,
    setShowSelectGoal,
    dogValue,
    setDogValue,
    tasks,
    setTasks,
    userById,
    setUserById,
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export const useInfo = () => {
  return useContext(InfoContext);
};
