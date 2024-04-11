import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent, CardActionArea } from "@mui/material";
// import { Container } from "@mui/material";

const GoalList = (props) => {
  return (
    <>
      <Card
        sx={{
          width: "90%",
          borderRadius: "20px",
          padding: "16px",
          height: "100%",
        }}
      >
        <CardActionArea onClick={() => props.handleSelectedGoal(props.goal)}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              alignContent={"center"}
            >
              {props.goal.goal}
            </Typography>
            <Typography variant="body1" component="div">
              {props.goal.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default GoalList;
