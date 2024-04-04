import React from "react";
import DogList from "./DogList";
import Button from "./Button";

const DogCard = (props) => {
  return (
    <>
      <SelectDog></SelectDog>
      <Button>Feed</Button>
      <Button>Train</Button>
      <Button>Play</Button>
    </>
  );
};

export default DogCard;
