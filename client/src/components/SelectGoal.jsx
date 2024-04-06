import React from "react";
import GoalList from "./GoalList";
import Button from "./Button";

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
      <Button onClick={props.handleGoalClick}>Next</Button>
    </div>
  );
};

export default SelectGoal;
