import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Task from "./pages/Task";
import NotFound from "./pages/NotFound";
import UserContext from "./context/user";

/* 

main is the dog stuff

*/

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <UserContext.Provider value={{ accessToken, setAccessToken }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />}></Route>
          <Route path="main" element={<Main />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="task" element={<Task />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
