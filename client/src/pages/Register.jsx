import React, { useState } from "react";
import UserContext from "../context/user";
import RegisterUser from "../components/Registration";
import styles from "../components/PageStyles.module.css";

/*

currently, register is not working 

*/

const Register = () => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <div className={`${styles.backgroundpage}`}>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        <RegisterUser></RegisterUser>
      </UserContext.Provider>
    </div>
  );
};

export default Register;
