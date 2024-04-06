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
  }, [props.selectedDog, userCtx.accessToken]);

  console.log(dogbyOwner);

  const addDog = async () => {
    const res = await fetchData(
      "/api/dogs",
      "PUT",
      {
        breed: props.selectedDog.breed,
        size: props.selectedDog.size,
        personality: props.selectedDog.personality,
        coat: props.selectedDog.coat,
        owner: "660f6811728f55dc40297b90", // need to change this to dynamically reflect the userid
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
      "/api/dogs/owner",
      "POST",
      {
        owner: "660f6811728f55dc40297b90",
      }, // need to change this to dynamically reflect the userid
      userCtx.accessToken
    );
    if (res.ok) {
      setDogByOwner(res.data.data);
      console.log(JSON.stringify(res.data.data));
      console.log("sucessfully got dog");
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  return (
    <>
      <div>
        {dogbyOwner.map((dog, index) => (
          <div key={index}>
            <p>{dog.breed}</p>
            <p>{dog.personality}</p>
            <p>{dog.coat}</p>
            <p>{dog.size}</p>
            <p>{dog.birthday}</p>
          </div>
        ))}
      </div>
      <Button>Feed</Button>
      <Button>Train</Button>
      <Button>Play</Button>
    </>
  );
};

export default DogCard;
