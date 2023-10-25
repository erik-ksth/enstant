import React from "react";
import Button from "@mui/material/Button";
import "../../../App.css";
import "../../../index.css";

const Btn = ({ label, onClick }) => {
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
    >
      {label}
    </Button>
  );
};

export default Btn;
