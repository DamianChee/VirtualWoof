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
  const [tasksExpired, setTasksExpired] = useState(false);

  const [goalModeChanged, setGoalModeChanged] = useState(false);

  const userId = userCtx.userById;
  const userGoal = userById.goalMode;
  // console.log(userGoal);

  // console.log(userId);
  const startValue = userById.startValue;

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
      goal: "Dog Show",
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

  const handleGoalClick = async () => {
    if (selectedGoal) {
      toggleSelectGoal();
      await updateUser(); // update user's goal, set goalModeChanged to true
      // await getTasksByGoal();
      // await refreshTasks(); // this has been moved to useEffect( , [goalModeChanged])
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
  const handleDogRunAway = async () => {
    if (dogValue.currentAffection <= 0) {
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
        id: "6615ee74bbd228b03275a743",
        currentAffection: dogValue.currentAffection,
        currentObedience: dogValue.currentObedience,
        currentHunger: dogValue.currentHunger,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      getDogByOwner();
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
      console.log("sucessfully checked task expiry");

      // Damian:
      // If task has expired, refresh the tasks (the endpoint above immediately
      // return true or false so we can use res.data.data without needing to set
      // it into state and worry about useState bugs)
      if (res.data.data) {
        // If you want to check which tasks are completed then adding points to
        // dog, do it before refreshTasks()
        // code here...
        // code here...
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
      console.log("sucessfully refreshed task");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    // Damian:
    // After logging in, get all the dogs by user's Id
    // Then check if tasks has expired

    getDogByOwner();
    // updateDog();
    // getTasksByGoal();
    // getUserById();
    checkTaskExpiry();
    // check if dog will run away, when logged in
    handleDogRunAway();
  }, []);

  // Damian:
  // When updateUser, change goalModeChanged to true, when it becomes true
  // refreshTasks in here
  useEffect(() => {
    refreshTasks();
  }, [goalModeChanged]);

  useEffect(() => {
    if (dogByOwner && dogByOwner.length > 0) {
      setDogValue(dogByOwner[0]);
    }
  }, [dogByOwner]);

  useEffect(() => {
    updateDog();
    const shouldShowPopup =
      dogValue.currentAffection > 250 ||
      dogValue.currentHunger > 250 ||
      dogValue.currentObedience > 250;

    setShowMessagePopup(shouldShowPopup);
  }, [
    dogValue.currentAffection,
    dogValue.currentHunger,
    dogValue.currentObedience,
  ]);

  useEffect(() => {
    // console.log(userById);
    // if (userById.goalMode) {
    //   getTasksByGoal();
    // }
  }, [userById]);

  useEffect(() => {
    // console.log(tasks);
    // if (tasks.length > 0) {
    //   // Ensure tasks is not empty
    //   const randomTasks = selectRandomTasks(tasks, 3);
    //   console.log("Random tasks selected:", randomTasks);
    //   assignTaskToUser(randomTasks); // Assuming assignTaskToUser is an async function
    // }
  }, [tasks]);

  // useEffect(() => {
  //   getTasksByGoal();
  // }, []);

  // useEffect(() => {
  //   if (userById.tasks) {
  //   }
  // }, [updateUser]);

  return (
    <div>
      {showUpdateModal && (
        <UpdateModal
          key={userId}
          setShowUpdateModal={setShowUpdateModal}
          deleteDog={deleteDog}
        />
      )}
      <NavBar></NavBar>
      {/* <Button
        disabled={Object.keys(dogByOwner).length > 0}
        onClick={toggleSelectDog}
      >
        Add Dog
      </Button> */}
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
        userById={userById}
      ></DogCard>
      {/* <div>{selectedGoal.goal}</div> */}
      <div>{userById.goalMode}</div>
      {/* <div>{tasks}</div> */}
      {/* <div>tasks:{userById.tasks}</div> */}
      {userById.tasks?.map((task) => (
        <TaskList
          tasks={tasks}
          key={task?._id}
          task={task?.name}
          description={task?.description}
          startValue={task?.startValue}
          endValue={task?.endValue}
        ></TaskList>
      ))}
      {showMessagePopup && <MessagePopup />}
    </div>
  );
};

export default Main;
