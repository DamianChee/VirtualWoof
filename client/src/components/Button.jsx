import React from "react";
import MuiButton from "@mui/material/Button";

const Button = (props) => {
  return <MuiButton onClick={props.onClick}>{props.children}</MuiButton>;
};

export default Button;
