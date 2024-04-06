import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";

const DogCard = (props) => {
  const userCtx = useContext(UserContext);
  // const fetchData = useFetch();
  // const [dogbyOwner, setDogByOwner] = useState([]);
  const dogByOwner = props.dogByOwner;
  console.log(props.selectedDog);
  console.log(props.selectedDog.breed);
  console.log(props.selectedGoal);
  const userGoal = props.selectedGoal.goal;
  console.log(userGoal);

  console.log(userCtx);
  // console.log(dogByOwner[0].currentAffection);

  return (
    <>
      <div>
        {dogByOwner.map((dog, index) => (
          <div key={index}>
            <p>{dog.breed}</p>
            <p>{dog.personality}</p>
            <p>{dog.coat}</p>
            <p>{dog.size}</p>
            <p>{dog.birthday}</p>
          </div>
        ))}
        {userGoal === "Companionship" && dogByOwner[0] && (
          <div>Affection Level:{dogByOwner[0].currentAffection}</div>
        )}
        {userGoal === "Routine & Discipline" && dogByOwner[0] && (
          <div>Hunger Level:{dogByOwner[0].currentHunger}</div>
        )}
        {userGoal === "Dog Confomation Show" && dogByOwner[0] && (
          <div>Obdience Level:{dogByOwner[0].currentObedience}</div>
        )}
      </div>
      <Button>Feed</Button>
      <Button>Train</Button>
      <Button>Play</Button>
    </>
  );
};

export default DogCard;
