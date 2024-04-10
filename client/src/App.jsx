import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Task from "./pages/Task";
import NotFound from "./pages/NotFound";
import UserContext from "./context/user";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./index.css";

/* 

main is the dog stuff
in the UserContext.Provider value (add values in here)
if need other info, do the same as the one shown

*/

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [userById, setUserById] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, userById, setUserById }}
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />}></Route>
          <Route path="main" element={<Main />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="task" element={<Task />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
