import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import Button from "./Button";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { useInfo } from "../context/info";

const Login = () => {
  const fetchData = useFetch();
  const navigate = useNavigate();

  const userCtx = useContext(UserContext);
  const { setUserInfo } = useInfo();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetchData("/api/users/login", "POST", {
      email,
      password,
    });
    if (res.ok) {
      userCtx.setAccessToken(res.data.access);
      const userData = res.data;
      userCtx.setUserById(userData.data._id);
      setUserInfo(res.data.data);
      // redirect to main page
      navigate("/main");
    } else {
      alert(JSON.stringify(res.data));
    }
  };

  return (
    <>
      <br />
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
            <h1>Welcome to Virtual Woof</h1>
            <br></br>
            <h3>Login </h3>
            <TextField
              id="outlined-basic"
              type="text"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            ></TextField>

            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                variant="contained"
                type="submit"
                onClick={handleLogin}
                fullWidth
              >
                LOGIN
              </Button>

              <Link to="/register">
                <Button variant="text" fullWidth>
                  Don’t have an account? Sign Up{" "}
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Login;
