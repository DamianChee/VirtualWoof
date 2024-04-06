import React, { useContext, useEffect, useRef, useState } from "react";
import DogList from "./DogList";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import userContext from "../context/user";
import GoalList from "./GoalList";

const DogCard = (props) => {
  const userCtx = useContext(userContext);
  const fetchData = useFetch();
  console.log(props.selectedDog);
  console.log(props.selectedDog.breed);

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

  if (props.selectedDog) {
    addDog();
  }
  return (
    <>
      <div>{props.selectedDog.breed}</div>
      <Button>Feed</Button>
      <Button>Train</Button>
      <Button>Play</Button>
    </>
  );
};

export default DogCard;
