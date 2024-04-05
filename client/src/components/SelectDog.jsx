import React, { useState, useEffect } from "react";
import Button from "./Button";
import Dog1 from "../images/Dog1.png";
import Dog2 from "../images/Dog2.png";
import Dog3 from "../images/Dog3.png";
import DogList from "./DogList";

const SelectDog = (props) => {
  const dogs = props.dogs;
  // const dogs = [
  //   {
  //     breed: "Poodle",
  //     personality: "Friendly and sensitive",
  //     coat: "curly",
  //     size: "medium",
  //     imageUrl: Dog1,
  //   },
  //   {
  //     breed: "Beagle",
  //     personality: "Friendly and loyal",
  //     coat: "straight",
  //     size: "medium",
  //     imageUrl: Dog2,
  //   },
  //   {
  //     breed: "Chihuahua",
  //     personality: "Friendly and playful",
  //     coat: "straight",
  //     size: "medium",
  //     imageUrl: Dog3,
  //   },
  // ];

  // const handleSelectedDog = (dog) => {
  //   console.log("Selected dog:", dog);
  //   setSelectedDog(dog);
  // };

  return (
    <div>
      {dogs.map((dog) => (
        <DogList
          key={dog.breed}
          dog={dog}
          handleSelectedDog={props.handleSelectedDog}
        ></DogList>
      ))}
    </div>
  );
};

export default SelectDog;
