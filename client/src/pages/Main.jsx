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
import { useInfo } from "../context/info";
import UpdateModal from "../components/UpdateModal";
import MessagePopup from "../components/MessagePopup";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

const Main = () => {
  const {
    isLoggedIn,
    userInfo,
    selectedDog,
    setSelectedDog,
    selectedGoal,
    setSelectedGoal,
    dogByOwner,
    setDogByOwner,
    showSelectDog,
    setShowSelectDog,
    showSelectGoal,
    setShowSelectGoal,
    dogValue,
    setDogValue,
    userById,
    setUserById,
    tasks,
    setTasks,
  } = useInfo();

  const userCtx = useContext(UserContext);
  const fetchData = useFetch();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [hasNoDog, setHasNoDog] = useState(false);

  const [goalModeChanged, setGoalModeChanged] = useState(false);

  const userId = userCtx.userById;
  const userGoal = userById.goalMode;
  const startValue = userById.startValue;

  const dogs = [
    {
      name: "Polly",
      breed: "Poodle",
      personality: "friendly and active",
      coat: "curly",
      size: "medium",
      imageUrl: Dog1,
    },
    {
      name: "Buddy",
      breed: "Beagle",
      personality: "friendly and loyal",
      coat: "rough",
      size: "medium",
      imageUrl: Dog2,
    },
    {
      name: "Charlie",
      breed: "Chihuahua",
      personality: "friendly and playful",
      coat: "smooth",
      size: "small",
      imageUrl: Dog3,
    },
  ];

  const goals = [
    {
      goal: "Companionship",
      description:
        "A furry interactive virtual companion is what makes you happy!",
    },
    {
      goal: "Routine & Discipline",
      description: "You seek to instill displine by following a schedule.",
    },
    {
      goal: "Dog Show",
      description:
        "You can't wait to show off your dog's attributes and conformation!",
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
      await getDogByOwner();
    }
  };

  const handleGoalClick = async () => {
    if (selectedGoal) {
      toggleSelectGoal();
      await updateUser(); // update user's goal, set goalModeChanged to true
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
    // await updateDog();
  };

  /**
   *
   * const toggleMessagePopup = () => {
   *  setShowMessagePopup(!showMessagePopup);
   * };
   *
   * const showCongratsMessage = () => {
   *  if (dogValue.affect >= 0) {
   *    toggleMessagePopup;
   *  }
   * };
   *
   */

  // check if affection is less than or equal to 0
  const handleDogRunAway = () => {
    if (
      dogByOwner[0].currentObedience <= 0 ||
      dogByOwner[0].currentAffection <= 0 ||
      dogByOwner[0].currentHunger <= 0
    ) {
      setShowUpdateModal(true);
    } else {
      console.log("dog is happy");
    }
  };

  const getUserById = async () => {
    const res = await fetchData(
      "/api/users/userid",
      "POST",
      {
        id: userId,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      setUserById(res.data);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
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
        owner: userId,
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

  // dog ran away, instead of delete dog
  // the function name is to represent the CRUD
  const deleteDog = async () => {
    const res = await fetchData(
      "/api/dogs",
      "DELETE",
      {
        id: userId,
        dog: dogByOwner[0]._id,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      getUserById();
      console.log("dog ran away");
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
        owner: userId,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      setDogByOwner(res.data.data);

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
    if (res.ok) {
      console.log("sucessfully updated dog value");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const updateUser = async () => {
    const res = await fetchData(
      "/api/users",
      "PATCH",
      {
        id: userId,

        goalMode: selectedGoal.goal,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      getUserById();
      setGoalModeChanged(true);
      console.log("sucessfully updated goal value");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const getTasksByGoal = async () => {
    // console.log(userGoal);
    const res = await fetchData(
      "/api/tasks/type",
      "POST",
      { type: userById.goalMode },
      userCtx.accessToken
    );
    if (res.ok) {
      setTasks(res.data.data);
      console.log("Successfully gotten task");
    } else {
      alert(JSON.stringify(res.data.data));
      console.log(res.data.data);
    }
  };

  // function selectRandomTasks(tasks, count) {
  //   const result = [];
  //   const tasksCopy = [...tasks];
  //   for (let i = 0; i < count; i++) {
  //     const randomIndex = Math.floor(Math.random() * tasksCopy.length);
  //     result.push(tasksCopy[randomIndex]);
  //     tasksCopy.splice(randomIndex, 1);
  //   }
  //   console.log(result);
  //   return result;
  // }

  // const assignTaskToUser = async (randomTasks) => {
  //   const res = await fetchData(
  //     "/api/users",
  //     "PATCH",
  //     {
  //       id: userId,
  //       tasks: randomTasks,
  //     },
  //     userCtx.accessToken
  //   );
  //   if (res.ok) {
  //     console.log("sucessfully updated task");
  //   } else {
  //     alert(JSON.stringify(res.data));
  //     console.log(res.data);
  //   }
  // };

  const howManyTasksUncompleted = () => {
    let counter = 0;
    if (!userById.tasks.length) return undefined;

    for (let i = 0; i < userById.tasks.length; ++i) {
      if (userById.tasks[i].startValue !== userById.tasks[i].endValue) {
        ++counter;
      }
    }
    return counter;
  };

  const decreaseDogValues = async (value) => {
    const res = await fetchData(
      "/api/dogs",
      "PATCH",
      {
        id: dogByOwner[0]._id,
        currentAffection: dogByOwner[0].currentAffection - value,
        currentObedience: dogByOwner[0].currentObedience - value,
        currentHunger: dogByOwner[0].currentHunger - value,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      console.log("Dog values decreased");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const checkTaskExpiry = async () => {
    // Damian:
    // Run endpoint to check if task has expired
    const res = await fetchData(
      "/api/users/tasksexpired",
      "POST",
      {
        id: userId,
        type: userById.goalMode,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      console.log("sucessfully checked task expiry: " + res.data.data);

      // Damian:
      // If task has expired, refresh the tasks (the endpoint above immediately
      // return true or false so we can use res.data.data without needing to set
      // it into state and worry about useState bugs)
      if (res.data.data) {
        console.log("task must be replaced");

        // Find number of tasks uncompleted before replacing them
        const numberOfTasks = howManyTasksUncompleted();
        // For each task decrease values by 10
        const valueToDecrease = numberOfTasks * 10;

        // Decrease the values by calling PATCH /api/dogs
        decreaseDogValues(valueToDecrease);
        // Refresh/reset the dogByOwner state
        refreshTasks();
      }
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const refreshTasks = async () => {
    // Damian:
    // Call the endpoint below to replace the task automatically
    let goal = userById.goalMode;
    if (selectedGoal.goal) goal = selectedGoal.goal;
    const res = await fetchData(
      "/api/users/tasksreplace/type",
      "POST",
      {
        id: userId,
        type: goal,
      },
      userCtx.accessToken
    );

    if (res.ok) {
      // setTasks(res.data.data);

      // Damian:
      // Call getUserById() to change states and have the tasks?.map below re-render the new tasks
      getUserById();
      getDogByOwner();
      console.log("sucessfully refreshed task");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("selectedDog", JSON.stringify(selectedDog));
  }, [selectedDog]);

  useEffect(() => {
    getDogByOwner();
  }, []);

  // Damian:
  // When updateUser, change goalModeChanged to true, when it becomes true
  // refreshTasks in here
  useEffect(() => {
    if (goalModeChanged) refreshTasks();
  }, [goalModeChanged]);

  useEffect(() => {
    if (!hasChecked && dogByOwner && dogByOwner.length) {
      checkTaskExpiry();
      setHasChecked(true);
    }

    if (dogByOwner && dogByOwner.length > 0) {
      setDogValue(dogByOwner[0]);
      // check if dog will run away, when logged in
      handleDogRunAway();
    }
  }, [dogByOwner]);

  useEffect(() => {
    if (dogByOwner && dogByOwner.length > 0) {
      updateDog();
    }

    const shouldShowPopup =
      dogValue.currentAffection > 250 ||
      dogValue.currentHunger > 250 ||
      dogValue.currentObedience > 250;

    setShowMessagePopup(shouldShowPopup);
    getDogByOwner();
  }, [
    dogValue.currentAffection,
    dogValue.currentHunger,
    dogValue.currentObedience,
  ]);

  return (
    <div>
      {showUpdateModal && (
        <UpdateModal
          key={userId}
          setShowUpdateModal={setShowUpdateModal}
          deleteDog={deleteDog}
          getDogByOwner={getDogByOwner}
        />
      )}
      <NavBar></NavBar>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", padding: "24px" }}
      >
        {/* <Button
        disabled={Object.keys(dogByOwner).length > 0}
        onClick={toggleSelectDog}
      >
        Add Dog
      </Button> */}
        <Button
          onClick={toggleSelectDog}
          sx={{
            width: "12%",
            borderRadius: "20px",
            margin: "0px 32px 0px 32px",
            letterSpacing: "3px",
          }}
        >
          Add Dog
        </Button>
      </Box>
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
      {/* {userById?.goalMode && <h3>Goal: {userById?.goalMode}</h3>} */}

      {dogByOwner && (
        <DogCard
          dogs={dogs}
          selectedDog={selectedDog}
          dogByOwner={dogByOwner}
          selectedGoal={selectedGoal}
          setSelectedGoal={selectedGoal}
          dogValue={dogValue}
          handleActionClick={handleActionClick}
          userById={userById}
        ></DogCard>
      )}
      {/* <div>
        <h4>Goal:{userById.goalMode}</h4>
      </div> */}

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {userById.tasks?.map((task, idx) => (
          <TaskList
            tasks={tasks}
            index={idx}
            key={task?._id}
            task={task?.name}
            description={task?.description}
            startValue={task?.startValue}
            endValue={task?.endValue}
            difficulty={task?.difficulty}
          ></TaskList>
        ))}
      </Stack>

      {showMessagePopup && <MessagePopup />}
    </div>
  );
};

export default Main;
