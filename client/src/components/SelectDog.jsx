import React, { useState, useEffect } from "react";
import Button from "./Button";
import Dog1 from "../images/Dog1.png";
import Dog2 from "../images/Dog2.png";
import Dog3 from "../images/Dog3.png";
import DogList from "./DogList";

const selectDog = (props) => {
  const [selectedDog, setSelectedDog] = useState(null);

  const handleSelectedDog = (dog) => {
    setSelectedDog(dog);
  };

  return (
    <div>
      <DogList
        dog="Poodle"
        imageUrl={Dog1}
        personality="Friendly and sensitive"
        coat="curly"
        size="medium"
        onClick={() => handleSelectedDog("Poodle")}
      ></DogList>
      <DogList
        dog="Beagle"
        imageUrl={Dog2}
        personality="Friendly and sensitive"
        coat="straight"
        size="medium"
        onClick={() => handleSelectedDog("Poodle")}
      ></DogList>
      <DogList
        dog="Chihuahua"
        imageUrl={Dog3}
        personality="Friendly and sensitive"
        coat="straight"
        size="small"
        onClick={() => handleSelectedDog("Poodle")}
      ></DogList>
    </div>
  );
};

export default selectDog;
