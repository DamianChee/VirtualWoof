import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
// import styles from "./PageStyles.module.css";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import Button from "./Button";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import virtualWoof from "../images/virtualWoof.png";

const Registration = () => {
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
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="600px"
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            // margin="16px"
            width="500px"
          >
            <img className="banner" src={virtualWoof} alt="virtualWoof" />
            <h3>Register</h3>

            <TextField
              label="Email"
              // placeholder="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
            ></TextField>

            <TextField
              // className={`${styles.usernameinputbox}`}
              label="Username"
              // placeholder="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              fullWidth
            ></TextField>

            <TextField
              // className={`${styles.passwordinputbox}`}
              // placeholder="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
            ></TextField>

            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
              margin="16px"
              width="500px"
            >
              <Button
                // className={`${styles.loginbutton}`}\
                variant="contained"
                type="submit"
                onClick={registerUser}
                fullWidth
              >
                register
              </Button>

              <Link to="/login">
                <Button variant="text" fullWidth>
                  Already have an account? Sign in
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Registration;
