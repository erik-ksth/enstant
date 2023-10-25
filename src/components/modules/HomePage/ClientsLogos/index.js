import React from "react";
import { Scrolling } from "../../PageLayout/submodules/Scrolling/Scrolling";
import logos from "./logo.json";

function ClientsLogos() {
  return (
    <div style={parentContainer}>
      <div style={childContainer}>
        <h2 className="contrastText">
          <span className="contrastBold">Trusted</span> by businesses of all
          sizes
        </h2>

        <div style={logoContainer}>
          {/* <Scrolling images={logos} speed={50000}></Scrolling> */}
        </div>
      </div>
    </div>
  );
}

export default ClientsLogos;

const parentContainer = {
  padding: "3% 0",
  backgroundColor: "var(--text-color)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const childContainer = {
  maxWidth: "1500px",
};

const logoContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
