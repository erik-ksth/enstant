import React from "react";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import "../../../App.css";
import "../../../index.css";

const Btn = ({ label, to }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: `var(--primary-blue)`,
        textTransform: "none",
        fontFamily: `NatsReg`,
        fontSize: "20px",
        padding: "5px 25px",
      }}
      component={Link}
      to={to}
    > 
      {label}
    </Button>
  );
};

export default Btn;
