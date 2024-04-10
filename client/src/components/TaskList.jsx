import React from "react";

const TaskList = (props) => {
  return (
    <div className="tasks">
      <h3>Task: {props.index + 1}</h3>
      <p>What you need to do: {props.task}</p>
      <p>
        Frequency: At least {props.endValue} times before the end of the day.
      </p>
      <p>Difficulty: {props.difficulty}</p>
      {/* <p>{props.description}</p> */}
    </div>
  );
};

export default TaskList;
