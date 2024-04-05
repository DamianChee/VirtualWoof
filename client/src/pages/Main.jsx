import React, { useState } from "react";
import NavBar from "../components/Navbar";
import SelectDog from "../components/SelectDog";
import SelectGoal from "../components/SelectGoal";
import DogList from "../components/DogList";

const Main = () => {
  const userCtx = useContext(userContext);
  const [dogs, setDogs] = useState([]);
  const [tasks, setTasks] = useState([]);

  //FETCH DOG DATA
  const getDogs = async () => {
    const res = await fetchData(
      "/api/dogs",
      undefined,
      undefined,
      userCtx.accessToken
    );

    if (res.ok) {
      setDogs(res.data);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  // GET TASKS DATA
  const getTasks = async () => {
    const res = await fetchData(
      "/endpoint",
      undefined,
      undefined,
      userCtx.accessToken
    );
    if (res.ok) {
      setTasks(res.data);
    } else {
      alert(JSON.stringify(res.date));
      console.log(res.data);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <DogList dogs={dogs}></DogList>

      <h1>Main</h1>
    </div>
  );
};

export default Main;
