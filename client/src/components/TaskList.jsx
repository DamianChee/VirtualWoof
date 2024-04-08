import React from "react";

const TaskList = (props) => {
  const tasks = props.tasks;

  //   function selectRandomTasks(tasks, count) {
  //     const result = [];
  //     const tasksCopy = [...tasks];
  //     for (let i = 0; i < count; i++) {
  //       const randomIndex = Math.floor(Math.random() * tasksCopy.length);
  //       result.push(tasksCopy[randomIndex]);
  //       tasksCopy.splice(randomIndex, 1);
  //     }
  //     return result;
  //   }

  //   const randomTasks = selectRandomTasks(tasks, 3);
  //   console.log(randomTasks);

  return (
    <div>
      <div>{props.task}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default TaskList;
