import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import styles from "../components/PageStyles.module.css";

/*

currently, registration is not working 

*/

const Login = (props) => {
  const fetchData = useFetch();

  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetchData("/auth/login", "POST", { email, password });
    if (res.ok) {
      userCtx.setAccessToken(res.data.access);
      const decoded = jwtDecode(res.data.access);
    } else {
      alert(JSON.stringify(res.data));
    }
  };

  return (
    <>
      <br />
      <div className="row">
        <div className="col-md-4"></div>
        <input
          type="text"
          className="col-md-4"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <input
          type="password"
          className="col-md-4"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-md-4"></div>
      </div>
      <button
        className={`${styles.loginbutton}`}
        type="submit"
        onClick={handleLogin}
      >
        login
      </button>
      <br />
      <Link to="/register">
        <button className={`${styles.registerbutton}`}>
          go to registration screen
        </button>
      </Link>
      <div className="col-md-4"></div>
    </>
  );
};

export default Login;
