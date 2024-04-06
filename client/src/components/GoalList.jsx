import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";

const GoalList = (props) => {
  return (
    <>
      <Card
        onClick={() => props.handleSelectedGoal(props.goal)}
        sx={{ width: 200 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.goal.goal}
          </Typography>
          <Typography variant="body2" component="div">
            {props.goal.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GoalList;
