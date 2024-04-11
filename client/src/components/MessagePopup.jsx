import React from "react";
import Button from "./Button";

const MessagePopup = (props) => {
  return (
    <div className="overlay">
      <div className="messagemodal">
        {" "}
        <h2>Congratulations!</h2>
        <h6>
          {props.selectedDog.name} is feeling so loved, well-behaved and
          well-fed! Because you did such a good job, we would like to invite you
          to adopt another dog. Check your email for this exclusive invite!
        </h6>
        <Button onClick={props.toggleMessagePopup}>Close</Button>
      </div>
    </div>
  );
};

export default MessagePopup;
