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
          width: "80%",
          borderRadius: "20px",
          padding: "16px",
          height: "80%",
        }}
      >
        <CardMedia
          component="img"
          height="max"
          image={props.dog.imageUrl}
          alt={props.dog}
        ></CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            alignContent={"center"}
          >
            {props.dog.name}
          </Typography>
          <Typography variant="body1" component="div">
            I am a {props.dog.personality} {props.dog.size}-sized{" "}
            {props.dog.breed} that has a {props.dog.coat} coat!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DogList;
