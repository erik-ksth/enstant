import { Description } from "@mui/icons-material";
import React from "react";

function Services() {
  return (
    <>
      <div class="flex items-center mt-20">
        <div class="w-10/12 max-w-screen-xl">
          <img src="./images/demo_preview_small.svg"></img>
        </div>
        <div class="z-50 w-auto flex flex-col items-start -ml-60">
          <h3 class="text-left">
            <span>Our Online Tool and Web Portal...</span>
          </h3>
          <div style={descriptionBox}>
            <p>
              Makes business cards ordering quicker, easier, smarter and more
              convenient.
            </p>
          </div>
          <div style={descriptionBox}>
            <p>Eliminates multiple proofing cycles and prevents errors.</p>
          </div>
          <div style={descriptionBox}>
            <p>Helps save valuable time and boost productivity.</p>
          </div>
          <div style={descriptionBox}>
            <p>Gives you control with business card orders.</p>
          </div>
          <div style={descriptionBox}>
            <p>
              Speeds up getting business cards, especially for Key Executive
              personnel.
            </p>
          </div>
          <div style={descriptionBox}>
            <p>Benefits you and your company.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

const descriptionBox = {
  fontSize: "90%",
  backgroundColor: "#FFFFFF50",
  boxShadow: "0 10px 12px #00000010",
  padding: "2% 5%",
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
  margin: "10px",
  width: "110%",
};
