import React, { useState } from "react";
import NavBar from "../components/Navbar";
import SelectDog from "../components/selectDog";
import SelectGoal from "../components/SelectGoal";
import DogCard from "../components/DogCard";

const Main = () => {
  const userCtx = useContext(userContext);
  const [dogs, setDogs] = useState([]);
  const [tasks, setTasks] = useState([]);

  //FETCH DOG DATA
  const getDogs = async () => {
    const res = await fetchData(
      "/endpoint",
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
      <SelectDog></SelectDog>
      <SelectGoal></SelectGoal>
      <DogCard></DogCard>

      <h1>Main</h1>
    </div>
  );
};

export default Main;
