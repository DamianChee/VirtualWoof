import React, { useState, useContext } from "react";
import NavBar from "../components/Navbar";
import SelectGoal from "../components/SelectGoal";
import SelectDog from "../components/SelectDog";
import DogCard from "../components/DogCard";
import Dog1 from "../images/Dog1.png";
import Dog2 from "../images/Dog2.png";
import Dog3 from "../images/Dog3.png";
import TaskList from "../components/TaskList";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";

const Main = () => {
  const userCtx = useContext(UserContext);
  const fetchData = useFetch();

  const [selectedDog, setSelectedDog] = useState({});
  const [selectedGoal, setSelectedGoal] = useState({});
  const [dogByOwner, setDogByOwner] = useState([]);
  const [showSelectDog, setShowSelectDog] = useState(null);
  const [showSelectGoal, setShowSelectGoal] = useState(null);

  // const userId = user;

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

  const handleNextClick = async () => {
    if (selectedDog) {
      toggleSelectGoal();
      await addDog();
      getDogByOwner();
    }
  };

  const toggleSelectDog = () => {
    setShowSelectDog(!showSelectDog);
  };

  const toggleSelectGoal = () => {
    setShowSelectGoal(!showSelectGoal);
  };

  const addDog = async () => {
    const res = await fetchData(
      "/api/dogs",
      "PUT",
      {
        breed: selectedDog.breed,
        size: selectedDog.size,
        personality: selectedDog.personality,
        coat: selectedDog.coat,
        owner: "660f6811728f55dc40297b90", // need to change this to dynamically reflect the userid
      },
      userCtx.accessToken
    );

    if (res.ok) {
      console.log("sucessfully addded dog");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const getDogByOwner = async () => {
    const res = await fetchData(
      "/api/dogs/owner",
      "POST",
      {
        owner: "660f6811728f55dc40297b90",
      }, // need to change this to dynamically reflect the userid
      userCtx.accessToken
    );
    if (res.ok) {
      setDogByOwner(res.data.data);
      console.log(JSON.stringify(res.data.data));
      console.log("sucessfully got dog");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
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
      <Button onClick={toggleSelectDog}>Add Dog</Button>
      {showSelectDog && (
        <SelectDog
          dogs={dogs}
          handleSelectedDog={handleSelectedDog}
          selectedDog={selectedDog}
          setSelectedDog={setSelectedDog}
          getDogByOwner={getDogByOwner}
          addDog={addDog}
          handleNextClick={handleNextClick}
          toggleSelectGoal={toggleSelectGoal}
        ></SelectDog>
      )}
      {showSelectGoal && (
        <SelectGoal
          goals={goals}
          handleSelectedGoal={handleSelectedGoal}
          selectedGoal={selectedGoal}
          setSelectedGoal={selectedGoal}
        ></SelectGoal>
      )}
      <DogCard
        dogs={dogs}
        selectedDog={selectedDog}
        dogByOwner={dogByOwner}
      ></DogCard>
      <div>{selectedGoal.goal}</div>
      <TaskList></TaskList>
    </div>
  );
};

export default Main;
