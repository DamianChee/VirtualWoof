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

  // const [selectedDog, setSelectedDog] = useState({});
  // const [selectedGoal, setSelectedGoal] = useState({});
  // const [dogByOwner, setDogByOwner] = useState([]);
  // const [showSelectDog, setShowSelectDog] = useState(null);
  // const [showSelectGoal, setShowSelectGoal] = useState(null);
  // const [dogValue, setDogValue] = useState({});
  // const [userById, setUserById] = useState({});
  // const [tasks, setTasks] = useState([]);

  // tingwei comment
  // this should be the login id of the user
  const userId = userCtx.userById;
  const userGoal = userById.goalMode;
  console.log(userGoal);

  console.log(userId);
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
      await updateUser();
      // await getUserById();
      await getTasksByGoal();
      console.log("Tasks before selecting random tasks:", tasks);
      const randomTasks = selectRandomTasks(tasks, 3);
      console.log("Random tasks selected:", randomTasks);
      await assignTaskToUser(randomTasks);
      await getUserById();
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

  const getUserById = async () => {
    const res = await fetchData(
      "/api/users/userid",
      "POST",
      {
        id: userId, // need to change this to dynamically reflect the userid
      },
      userCtx.accessToken
    );
    if (res.ok) {
      setUserById(res.data); // tingwei comment: can consider changing but up to you
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
        owner: userId, // tingwei comment
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
      "/api/users",
      "DELETE",
      {
        id: dogByOwner[0].id,
      },
      userCtx.accessToken
    );
    if (res.okay) {
      console.log("dog ran away");
      getUserById();
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.dataß);
    }
  };

  const getDogByOwner = async () => {
    const res = await fetchData(
      "/api/dogs/owner",
      "POST",
      {
        // owner: userGoal,
        owner: userId, // tingwei comment
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

  const updateUser = async () => {
    const res = await fetchData(
      "/api/users",
      "PATCH",
      {
        id: userId, // tingwei comment

        goalMode: selectedGoal.goal,
      },
      userCtx.accessToken
    );
    if (res.okay) {
      console.log("sucessfully updated goal value");
      getUserById(); // tingwei comment: can consider changing but up to you
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  // GET TASKS DATA
  // const getAllTasks = async () => {
  //   const res = await fetchData(
  //     "/api/tasks",
  //     undefined,
  //     undefined,
  //     userCtx.accessToken
  //   );
  //   if (res.ok) {
  //     setTasks(res.data.data);
  //     console.log("Successfully gotten task");
  //   } else {
  //     alert(JSON.stringify(res.data.data));
  //     console.log(res.data.data);
  //   }
  // };

  const getTasksByGoal = async () => {
    console.log(userGoal);
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

  function selectRandomTasks(tasks, count) {
    const result = [];
    const tasksCopy = [...tasks];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * tasksCopy.length);
      result.push(tasksCopy[randomIndex]);
      tasksCopy.splice(randomIndex, 1);
    }
    console.log(result);
    return result;
  }

  const assignTaskToUser = async (randomTasks) => {
    const res = await fetchData(
      "/api/users",
      "PATCH",
      {
        id: userId,
        tasks: randomTasks,
      },
      userCtx.accessToken
    );
    if (res.ok) {
      console.log("sucessfully updated task");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  // async function checkAndAssignTasks(startValue, endValue, deadline) {
  //   const now = new Date().getTime();
  //   if (startValue === endValue || now >= deadline) {
  //     const tasks = await getAllTasks();
  //     const randomTasks = selectRandomTasks(tasks, 3);
  //     await assignTaskToUser(randomTasks);
  //   }
  // }

  // console.log(userById.tasks);
  // const startValue = userById.tasks.startValue;
  // const endValue = userById.tasks.endValue;
  // const deadline = userById.tasks.deadline;

  // checkAndAssignTasks(startValue, endValue, deadline);

  useEffect(() => {
    if (dogByOwner.length > 0) {
      setDogValue(dogByOwner[0]);
    }
  }, [dogByOwner]);

  useEffect(() => {
    // Perform actions with the updated dogValue here
    console.log(dogValue.currentAffection);
  }, [dogValue]);

  useEffect(() => {
    console.log(userById);
  }, [userById]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  // useEffect(() => {
  //   getTasksByGoal();
  // }, []);

  useEffect(() => {
    if (userById.goalMode) {
      getTasksByGoal();
    }
  }, [userById]);
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     await getAllTasks();
  //   };
  //   fetchTasks();
  // }, []);
  useEffect(() => {
    if (userById.tasks) {
    }
  }, [userById]);

  return (
    <div>
      {showUpdateModal && (
        <UpdateModal
          setShowUpdateModal={setShowUpdateModal}
          deleteDog={deleteDog}
        />
      )}
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
        userById={userById}
      ></DogCard>
      {/* <div>{selectedGoal.goal}</div> */}
      <div>{userById.goalMode}</div>
      {/* <div>tasks:{userById.tasks}</div> */}
      {userById.tasks?.map((task) => (
        <TaskList
          tasks={tasks}
          key={task?.id}
          task={task?.name}
          description={task?.description}
          startValue={task?.startValue}
          endValue={task?.endValue}
        ></TaskList>
      ))}
    </div>
  );
};

export default Main;
