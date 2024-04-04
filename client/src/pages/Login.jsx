import React, { useState } from "react";
import UserContext from "../context/user";
import LoginUser from "../components/Login";
import styles from "../components/PageStyles.module.css";

/* 

currently, login is not working

 */

const Login = () => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <div className={`${styles.backgroundpage}`}>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        <LoginUser></LoginUser>
      </UserContext.Provider>
    </div>
  );
};

export default Login;
