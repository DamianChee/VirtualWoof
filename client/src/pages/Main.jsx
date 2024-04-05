import React, { useState } from "react";
import NavBar from "../components/Navbar";
import SelectDog from "../components/SelectDog";
import SelectGoal from "../components/SelectGoal";
import DogList from "../components/DogList";
import DogCard from "../components/DogCard";
import Dog1 from "../images/Dog1.png";
import Dog2 from "../images/Dog2.png";
import Dog3 from "../images/Dog3.png";

const Main = () => {
  // const userCtx = useContext(userContext);
  // const [dogs, setDogs] = useState([]);
  // const [tasks, setTasks] = useState([]);
  const [selectedDog, setSelectedDog] = useState({});

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

  const handleSelectedDog = (dog) => {
    console.log("Dog selected:", dog);
    setSelectedDog(dog);
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
      <SelectDog
        dogs={dogs}
        handleSelectedDog={handleSelectedDog}
        selectedDog={selectedDog}
        setSelectedDog={setSelectedDog}
      ></SelectDog>
      <DogCard dogs={dogs} selectedDog={selectedDog}></DogCard>
    </div>
  );
};

export default Main;
