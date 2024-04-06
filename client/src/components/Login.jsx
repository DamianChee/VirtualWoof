import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PageStyles.module.css";

const Login = (props) => {
  const fetchData = useFetch();
  const navigate = useNavigate();

  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetchData("/api/users/login", "POST", {
      email,
      password,
    });
    if (res.ok) {
      userCtx.setAccessToken(res.data.access);
      const decoded = jwtDecode(res.data.access);
      // redirect to main page
      navigate("/main");
      console.log(res);
    } else {
      alert(JSON.stringify(res.data));
    }
  };

  return (
    <>
      <h1 className={`${styles.pageheader}`}>Login</h1>
      <br />
      <div>
        <input
          type="text"
          className={`${styles.emailinputbox}`}
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          className={`${styles.passwordinputbox}`}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
