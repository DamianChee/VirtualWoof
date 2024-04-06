import React from "react";
import GoalList from "./GoalList";

const SelectGoal = (props) => {
  const goals = props.goals;
  console.log(props.selectedGoal);
  return (
    <div>
      {goals.map((goal) => (
        <GoalList
          key={goal.goal}
          goal={goal}
          handleSelectedGoal={props.handleSelectedGoal}
        ></GoalList>
      ))}
    </div>
  );
};

export default SelectGoal;
