import React, { useState } from "react";
import NavBar from "../components/Navbar";
import SelectGoal from "../components/SelectGoal";
import SelectDog from "../components/SelectDog";
import DogList from "../components/DogList";
import DogCard from "../components/DogCard";
import Dog1 from "../images/Dog1.png";
import Dog2 from "../images/Dog2.png";
import Dog3 from "../images/Dog3.png";
import TaskList from "../components/TaskList";

const Main = () => {
  // const userCtx = useContext(userContext);
  // const [dogs, setDogs] = useState([]);
  // const [tasks, setTasks] = useState([]);
  const [selectedDog, setSelectedDog] = useState({});
  const [selectedGoal, setSelectedGoal] = useState({});

  const dogs = [
    {
      breed: "Poodle",
      personality: "Friendly and sensitive",
      coat: "curly",
      size: "medium",
      imageUrl: Dog1,
    },
    {
      breed: "Beagle",
      personality: "Friendly and loyal",
      coat: "straight",
      size: "medium",
      imageUrl: Dog2,
    },
    {
      breed: "Chihuahua",
      personality: "Friendly and playful",
      coat: "straight",
      size: "medium",
      imageUrl: Dog3,
    },
  ];

  const goals = [
    {
      goal: "Companionship",
      description:
        "You seek a furry virtual companion that you can interact with.",
    },
    {
      goal: "Routine & Discipline",
      description: "You seek to instill displine by following a schedule.",
    },
    {
      goal: "Dog Confomation Show",
      description:
        "You seek to exhibit your dog's attributes and conformation.",
    },
  ];

  const handleSelectedDog = (dog) => {
    console.log("Dog selected:", dog);
    setSelectedDog(dog);
  };

  const handleSelectedGoal = (goal) => {
    console.log("Goal selected:", goal);
    setSelectedGoal(goal);
  };

  // GET TASKS DATA
  const getAllTasks = async () => {
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
      <SelectDog
        dogs={dogs}
        handleSelectedDog={handleSelectedDog}
        selectedDog={selectedDog}
        setSelectedDog={setSelectedDog}
      ></SelectDog>
      <SelectGoal
        goals={goals}
        handleSelectedGoal={handleSelectedGoal}
        selectedGoal={selectedGoal}
        setSelectedGoal={selectedGoal}
      ></SelectGoal>
      <DogCard dogs={dogs} selectedDog={selectedDog}></DogCard>
      <div>{selectedGoal.goal}</div>
      <TaskList></TaskList>
    </div>
  );
};

export default Main;
