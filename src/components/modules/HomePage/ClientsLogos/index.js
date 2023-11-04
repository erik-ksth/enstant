import React from "react";
import "./LogosScrolling.css";
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

        <div class="slider">
          <ul>
            {logos.map((image) => (
              <li>
                  <img
                    key={image.id}
                    src={image.logo}
                    alt={`Image ${image.id}`}
                  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientsLogos;

const parentContainer = {
  padding: "3% 0",
  backgroundColor: "var(--text-color)",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
};

const childContainer = {
  maxWidth: "1500px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
};

const logoContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
