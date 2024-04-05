import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";

const GoalList = () => {
  return (
    <>
      <Card onClick={() => props.onClick(props.dog)} sx={{ width: 200 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dog.breed}
          </Typography>
          <Typography variant="body2" component="div">
            {props.dog.personality}
          </Typography>
          <Typography variant="body2" component="div">
            {props.dog.size}
          </Typography>
          <Typography variant="body2" component="div">
            {props.dog.coat}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GoalList;
