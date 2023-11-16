import React from "react";
import "../../../../index.css";
import { Container } from "@mui/material";

function WhatDoYouWant() {
  return (
    <Container>
      <h2>
        What Do You <span style={{ color: "var(--primary-blue)" }}>Want?</span>
      </h2>
      <p className="description">
        If you are looking for the following requirements, you've just found the
        right vendor, <span>enstant.com</span>!
      </p>

      <ul style={listContainer}>
        <li style={list}>
          <img src="/images/icons/shipping_icon.svg"></img>
          <p style={{ textAlign: "center" }}>
            Corporate business cards <span>shipped within 3 days?</span>
          </p>
        </li>
        <li style={list}>
          <img src="/images/icons/bag_icon.svg"></img>
          <p style={{ textAlign: "center" }}>
            Place each order in <span>less than 30 seconds!</span>
          </p>
        </li>
        <li style={list}>
          <img src="/images/icons/checked_icon.svg"></img>
          <p style={{ textAlign: "center" }}>
            Printed <span>correctly</span> in the first time?
          </p>
        </li>
        <li style={list}>
          <img src="/images/icons/status_icon.svg"></img>
          <p style={{ textAlign: "center" }}>
            <span>Informed</span> about the status of your order?
          </p>
        </li>
        <li style={list}>
          <img src="/images/icons/happy_icon.svg"></img>
          <p style={{ textAlign: "center" }}>
            Color and quality to be <span>consistent</span> every time?
          </p>
        </li>
        <li style={list}>
          <img src="/images/icons/earth_icon.svg"></img>
          <p style={{ textAlign: "center" }}>
            Distributed to <span>domestic and international</span> locations?
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default WhatDoYouWant;

const listContainer = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "start",
  justifyContent: "space-evenly",
  alignItems: "center",
  rowGap: "50px",
  columnGap: "4%",
  margin: '0 0 100px 0'
};

const list = {
  listStyle: "none",
  display: "flex",
  alignSelf: "stretch",
  flexDirection: "column",
  width: "25%",
  alignItems: "center",
  textAlign: "center",
};
