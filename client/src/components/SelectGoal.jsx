import React from "react";
import GoalList from "./GoalList";
import Button from "./Button";
import { Stack } from "@mui/material";

const SelectGoal = (props) => {
  const goals = props.goals;
  console.log(props.selectedGoal);
  return (
    <div className="overlay">
      <div className="selectgoalmodal">
        <h2>Select a dog</h2>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {goals.map((goal) => (
            <GoalList
              key={goal.goal}
              goal={goal}
              handleSelectedGoal={props.handleSelectedGoal}
            ></GoalList>
          ))}
        </Stack>
        <Button onClick={props.handleGoalClick}>Next</Button>
      </div>
    </div>
  );
};

export default SelectGoal;
