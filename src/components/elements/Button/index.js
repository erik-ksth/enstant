import React from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import "../../../App.css";
import "../../../index.css";

const Btn = ({ label, to, back }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: back ? "white" : "var(--primary-blue)",
        color: back ? "var(--primary-blue)" : "white",
        textTransform: "none",
        fontFamily: `NatsReg`,
        fontSize: "75%",
        padding: "5px 25px",
        "&:hover": {
          backgroundColor: back ? "#F5F5F5" : "#1E6AB1",
        },
      }}
      component={Link}
      to={to}
    > 
      {label}
    </Button>
  );
};

export default Btn;
