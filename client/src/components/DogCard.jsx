import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";

const DogCard = (props) => {
  const userCtx = useContext(UserContext);
  // const fetchData = useFetch();
  // const [dogbyOwner, setDogByOwner] = useState([]);
  const dogByOwner = props.dogByOwner;
  const dogValue = props.dogValue;
  // const userById = props.userById;
  console.log(props.selectedDog);
  console.log(props.selectedDog.breed);
  console.log(props.selectedGoal);
  const userGoal = props.userById.goalMode;
  console.log(userGoal);
  console.log(props.userById);
  // const userId = userCtx.userById;
  // console.log(props.);

  console.log(userCtx);
  // const dogValue = props.dogValue;
  // const [currentDog, setCurrentDog] = useState(dogByOwner);
  // useEffect(() => {
  //   setCurrentDog(dogByOwner);
  // }, [dogByOwner]);

  // console.log(props.dogByOwner[1].currentHunger);

  // const affectionLevel = dogByOwner[0].currentAffection;
  // console.log(affectionLevel);
  // // const hungerLevel = dogByOwner[0].currentHunger;
  // const obedienceLevel = dogByOwner[0].currentObedience;

  // console.log(dogByOwner[0].currentAffection);

  // console.log(affectionLevel + 10);

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
        {userGoal === "Companionship" && (
          <div>Affection Level:{dogValue.currentAffection}</div>
        )}
        {userGoal === "Routine & Discipline" && (
          <div>Hunger Level:{dogValue.currentHunger}</div>
        )}
        {userGoal === "Dog Show" && (
          <div>Obdience Level:{dogValue.currentObedience}</div>
        )}
      </div>
      <Button onClick={props.handleActionClick}>Feed</Button>
      <Button onClick={props.handleActionClick}>Train</Button>
      <Button onClick={props.handleActionClick}>Play</Button>
    </>
  );
};

export default DogCard;
