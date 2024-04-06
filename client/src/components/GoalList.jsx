import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent, CardActionArea } from "@mui/material";

const GoalList = (props) => {
  return (
    <>
      <Card sx={{ width: 200 }}>
        <CardActionArea onClick={() => props.handleSelectedGoal(props.goal)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.goal.goal}
            </Typography>
            <Typography variant="body2" component="div">
              {props.goal.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default GoalList;
