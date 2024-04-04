import React from "react";

const DogList = (props) => {
  return (
    <div>
      {props.dogs.map((dog) => (
        <div key={dog._id} id={dog._id}>
          <h3>breed={dog.breed}</h3>
          <p>size={dog.size}</p>
          <p>personality={dog.personality}</p>
          <p>coat={dog.coat}</p>
          <p>currentAffection={currentAffection}</p>
          <p>currentObedience={currentObedience}</p>
          <p>currentHunger={currentHunger}</p>
          <p>birthday={birthday}</p>
        </div>
      ))}
    </div>
  );
};

export default DogList;
