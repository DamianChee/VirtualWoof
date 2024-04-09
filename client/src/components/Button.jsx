import React from "react";
import MuiButton from "@mui/material/Button";

const Button = (props) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "20px",
        letterSpacing: "3px",
      }}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
