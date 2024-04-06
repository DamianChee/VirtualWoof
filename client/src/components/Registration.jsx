import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import styles from "./PageStyles.module.css";

const Registration = (props) => {
  const fetchData = useFetch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    const res = await fetchData("/api/users", "PUT", {
      email,
      username,
      password,
    });

    if (res.ok) {
      setEmail("");
      setUsername("");
      setPassword("");
    } else {
      console.log(res.data);
    }
  };

  return (
    <>
      <h1 className={`${styles.pageheader2}`}>Register</h1>
      <br />
      <div>
        <input
          className={`${styles.emailinputbox}`}
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className={`${styles.usernameinputbox}`}
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className={`${styles.passwordinputbox}`}
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className={`${styles.loginbutton}`}
        type="submit"
        onClick={registerUser}
      >
        register
      </button>
      <br />
      <div>
        <Link to="/login">
          <button className={`${styles.registerbutton}`}>
            go to login screen
          </button>
        </Link>
      </div>
    </>
  );
};

export default Registration;
