import React, { useState, useEffect } from "react";
import Button from "./Button";
import DogList from "./DogList";
import { Stack } from "@mui/material";

const SelectDog = (props) => {
  const dogs = props.dogs;
  console.log(props.selectedDog);

  // const handleNextClick = () => {
  //   if (props.selectedDog) {
  //     addDog()
  //     getDogbyOwner();
  //   }

  return (
    <div className="overlay">
      <div className="selectdogmodal">
        <h2>Select a dog</h2>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {dogs.map((dog) => (
            <DogList
              key={dog.breed}
              dog={dog}
              handleSelectedDog={props.handleSelectedDog}
            ></DogList>
          ))}
        </Stack>
        <Button
          onClick={() => {
            console.log("Button clicked");
            props.handleNextClick();
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SelectDog;
