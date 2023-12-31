import { Container } from "@mui/material";
import "animate.css";
import "./style.css";
import "../../../../index.css";
import React from "react";
import Btn from "../../../elements/Button/index";

function HeroSection() {
  return (
    <Container sx={{ ...container, maxWdith: "1500px" }}>
      <h1>
        Corporate Business Cards <br /> for your Team
      </h1>
      <p className="description">
        Enstant provides quick, easy & smart{" "}
        <span>
          <b>Online Business Cards Ordering Tool</b>
        </span>{" "}
        &{" "}
        <span>
          <b>Web Portal.</b>
        </span>
      </p>
      <Btn label="View Demo" to="/demo" />
      <img className="heroImg" src="/images/demo_preview.svg"></img>
    </Container>
  );
}

export default HeroSection;

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "4% 0",
};
