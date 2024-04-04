import React, { useState } from "react";
import UserContext from "../context/user";
import LoginUser from "../components/Login";
import RegisterUser from "../pages/Register";

/* 

currently, login is not working

 */

const Login = () => {
  const [accessToken, setAccessToken] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        {accessToken.length > 0 && <BooksDisplay></BooksDisplay>}
        {accessToken.length === 0 && showLogin && (
          <LoginUser setShowLogin={setShowLogin}></LoginUser>
        )}
        {accessToken.length === 0 && !showLogin && (
          <RegisterUser setShowLogin={setShowLogin}></RegisterUser>
        )}
      </UserContext.Provider>
    </>
  );
};

export default Login;
