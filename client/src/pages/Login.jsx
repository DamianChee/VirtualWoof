import React, { useState } from "react";
import UserContext from "../context/user";
import LoginUser from "../components/Login";
import RegisterUser from "../pages/Register";
import styles from "../components/PageStyles.module.css";

/* 

currently, login is not working

 */

const Login = () => {
  const [accessToken, setAccessToken] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className={`${styles.backgroundpage}`}>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        {accessToken.length === 0 && showLogin && (
          <LoginUser setShowLogin={setShowLogin}></LoginUser>
        )}
        {accessToken.length === 0 && !showLogin && (
          <RegisterUser setShowLogin={setShowLogin}></RegisterUser>
        )}
      </UserContext.Provider>
    </div>
  );
};

export default Login;
