import React, { useState, useEffect } from "react";
import Button from "./Button";
import Dog1 from "../images/Dog1.png";
import Dog2 from "../images/Dog2.png";
import Dog3 from "../images/Dog3.png";
import DogList from "./DogList";

const SelectDog = (props) => {
  const dogs = props.dogs;
  console.log(props.selectedDog);

  return (
    <div>
      {dogs.map((dog) => (
        <DogList
          key={dog.breed}
          dog={dog}
          handleSelectedDog={props.handleSelectedDog}
        ></DogList>
      ))}
      <Button onClick={() => props.handleSelectedDog(props.dog)}>Test</Button>
    </div>
  );
};

export default SelectDog;
