import React from "react";
import MuiButton from "@mui/material/Button";

const Button = (props) => {
  return <MuiButton>{props.children}</MuiButton>;
};

export default Button;
