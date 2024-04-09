import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

const DogList = (props) => {
  return (
    <>
      <Card
        onClick={() => props.handleSelectedDog(props.dog)}
        sx={{
          width: "90%",
          borderRadius: "20px",
          padding: "16px",
          height: "90",
        }}
      >
        <CardMedia
          component="img"
          height="max"
          image={props.dog.imageUrl}
          alt={props.dog}
        ></CardMedia>
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

export default DogList;
