import React from "react";
import DogList from "./DogList";
import Button from "./Button";

const DogCard = (props) => {
  console.log(props.selectedDog);
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
