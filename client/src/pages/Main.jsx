import React, { useState, useContext, useEffect } from "react";
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
  const [dogValue, setDogValue] = useState({});

  console.log(dogByOwner[0]);
  // const dogId = dogByOwner[0]._id;
  // console.log(dogId);

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
      toggleSelectDog();
      await addDog();
      getDogByOwner();
    }
  };

  const handleGoalClick = () => {
    if (selectedGoal) {
      toggleSelectGoal();
    }
  };

  const toggleSelectDog = () => {
    setShowSelectDog(!showSelectDog);
  };

  const toggleSelectGoal = () => {
    setShowSelectGoal(!showSelectGoal);
  };

  const handleActionClick = async () => {
    setDogValue((prevDogValue) => ({
      ...prevDogValue,
      currentAffection: prevDogValue.currentAffection + 5,
      currentHunger: prevDogValue.currentHunger + 5,
      currentObedience: prevDogValue.currentObedience + 5,
    }));
    console.log(dogValue.currentAffection);
    await updateDog();
    // getDogByOwner();
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
        owner: "66112280318207e2c47f1214", // need to change this to dynamically reflect the userid
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
        owner: "66112280318207e2c47f1214",
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

  const updateDog = async () => {
    const res = await fetchData(
      "/api/dogs",
      "PATCH",
      {
        id: dogByOwner[0]._id,
        currentAffection: dogValue.currentAffection,
        currentObedience: dogValue.currentObedience,
        currentHunger: dogValue.currentHunger,
      },
      userCtx.accessToken
    );
    if (res.okay) {
      console.log("sucessfully updated dog value");
      getDogByOwner();
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

  useEffect(() => {
    if (dogByOwner.length > 0) {
      setDogValue(dogByOwner[0]);
    }
  }, [dogByOwner]);

  useEffect(() => {
    // Perform actions with the updated dogValue here
    console.log(dogValue.currentAffection);
  }, [dogValue]);

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
          handleGoalClick={handleGoalClick}
        ></SelectGoal>
      )}
      <DogCard
        dogs={dogs}
        selectedDog={selectedDog}
        dogByOwner={dogByOwner}
        selectedGoal={selectedGoal}
        setSelectedGoal={selectedGoal}
        dogValue={dogValue}
        handleActionClick={handleActionClick}
      ></DogCard>
      <div>{selectedGoal.goal}</div>
      <TaskList></TaskList>
    </div>
  );
};

export default Main;
