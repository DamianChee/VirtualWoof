import React, { useState } from "react";
import UserContext from "../context/user";
import LoginUser from "../components/Login";
import virtualWoof from "../images/virtualWoof.png";

// import styles from "../components/PageStyles.module.css";

const Login = () => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <div>
      <LoginUser></LoginUser>
    </div>
  );
};

export default Login;
