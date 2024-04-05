import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Button from "./Button";
const DogList = (props) => {
  return (
    <>
      <Card sx={{ width: 200 }}>
        <CardMedia
          component="img"
          height="max"
          image={props.imageUrl}
          alt={props.dog}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dog}
          </Typography>
          <Typography variant="body2" component="div">
            {props.personality}
          </Typography>
          <Typography variant="body2" component="div">
            {props.size}
          </Typography>
          <Typography variant="body2" component="div">
            {props.coat}
          </Typography>
          <Button>Select</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default DogList;
