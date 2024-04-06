import React, { useContext, useEffect, useRef, useState } from "react";
import DogList from "./DogList";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";
import GoalList from "./GoalList";

const DogCard = (props) => {
  const userCtx = useContext(UserContext);
  const fetchData = useFetch();
  const [dogbyOwner, setDogByOwner] = useState([]);
  console.log(props.selectedDog);
  console.log(props.selectedDog.breed);
  console.log(userCtx);

  useEffect(() => {
    if (props.selectedDog) {
      addDog();
      getDogbyOwner();
    }
  }, [props.selectedDog]);

  const addDog = async () => {
    const res = await fetchData(
      "/api/dogs",
      "PUT",
      {
        breed: props.selectedDog.breed,
        size: props.selectedDog.size,
        personality: props.selectedDog.personality,
        coat: props.selectedDog.coat,
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

  const getDogbyOwner = async () => {
    const res = await fetchData(
      "/api/dogs/id",
      "POST",
      {
        owner: "660e1c58b23ff2bdba967db5",
      }, // need to change this to dynamically reflect the userid
      userCtx.accessToken
    );
    if (res.ok) {
      setDogByOwner(res.data);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  return (
    <>
      {/* <div>{props.selectedDog?.breed}</div>
      {dogbyOwner.map((dog, idx) => (
        <div key={idx}>{dog.breed}</div>
      ))}
      <div>{dogbyOwner.breed}</div>
      <Button>Feed</Button>
      <Button>Train</Button>
      <Button>Play</Button> */}
    </>
  );
};

export default DogCard;
