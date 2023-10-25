import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

function WhatCanWeDo() {
  return (
    <div style={parentContainer}>
      <div style={container}>
        <h2 className="contrastText">
          What <span className="contrastBold">can we do</span> for you?
        </h2>

        <ul style={listContainer}>
          <li style={list}>
            <CheckCircleOutlineIcon style={checkedIcon} />
            <p className="contrastText">
              enstant.com provides you with a
              <span className="contrastBold">
                {" "}
                quicker, easier and smarter solution{" "}
              </span>
              to manage your Corporate or Organization business card orders.
            </p>
          </li>

          <li style={list}>
            <CheckCircleOutlineIcon style={checkedIcon} />
            <p className="contrastText">
              enstant.com allows you to
              <span className="contrastBold"> place </span> orders,
              <span className="contrastBold"> poof </span>
              for typos and view up-to-the-minute order
              <span className="contrastBold"> status </span> and
              <span className="contrastBold"> history </span>
              any time from anywhere using internet!
            </p>
          </li>

          <li style={list}>
            <CheckCircleOutlineIcon style={checkedIcon} />
            <p className="contrastText">
              enstant.com sets up a
              <span className="contrastBold">
                {" "}
                password protected private website{" "}
              </span>
              for your business cards, ensuring
              <span className="contrastBold"> consistency </span>
              in logo, fonts, layout, and link colors, etc.
            </p>
          </li>

          <li style={list}>
            <CheckCircleOutlineIcon style={checkedIcon} />
            <p className="contrastText">
              Users can
              <span className="contrastBold"> instantly preview </span>
              an online proof, speeding up the proofing cycle and preventing
              errors.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default WhatCanWeDo;

const parentContainer = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: `var(--text-color)`,
  padding: "3% 0",
  width: "100%",
};

const container = {
  maxWidth: "1500px",
};

const checkedIcon = {
  color: "white",
  fontSize: "2em",
};

const listContainer = {
  padding: " 2% 10%",
};

const list = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  columnGap: "2%",
};
