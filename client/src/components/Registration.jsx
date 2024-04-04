import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Registration = (props) => {
  const fetchData = useFetch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    const res = await fetchData("/auth/register", "PUT", {
      email,
      password,
    });

    if (res.ok) {
      setEmail("");
      setPassword("");
    } else {
      console.log(res.data);
    }
  };

  return (
    <>
      <br />
      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="col-md-4"></div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <input
          className="col-md-4"
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="col-md-4"></div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <button className="col-md-4" type="submit" onClick={registerUser}>
          register
        </button>
        <div className="col-md-4"></div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <button
          className="col-md-4"
          type="submit"
          onClick={() => props.setShowLogin(true)}
        >
          go to login screen
        </button>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Registration;
