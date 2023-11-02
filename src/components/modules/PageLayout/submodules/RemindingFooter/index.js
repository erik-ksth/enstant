import React from "react";
import Button from "../../../../elements/Button";

function RemindingFooter() {
  return (
    <div style={parentContainer}>
      <div style={childContainer}>
        <div style={firstColumn}>
          <h2 style={{ textAlign: "left" }}>
            Ready to
            <br />
            <span>Start Ordering</span>?
          </h2>
          <p class="py-5">
            Register and get your own company portal for <span>free</span>!
            <br />
            No payment is required to open an account.
          </p>
          <Button label={"Get Started"} />
        </div>
        <div style={secondColumn}>
          <div>
            <h2 style={{ textAlign: "left" }}>
              Want to <span>know</span>
              <br />
              how it works?
            </h2>
            <p class="py-5">Experience a quick interactive demo!</p>
          </div>
          <Button label={"View Demo"} to="/demo"/>
        </div>
      </div>
    </div>
  );
}

export default RemindingFooter;

const parentContainer = {
  width: "100%",
  backgroundColor: "white",
  display: 'flex',
  justifyContent: 'center',
};

const childContainer = {
  padding: "3% 5%",
  display: "flex",
  flexWrap: "wrap",
  width: '100%',
  maxWidth: "1500px",
};

const firstColumn = {
  width: "49%",
  height: "100%",
  borderRight: "1px solid var(--text-color)",
  paddingRight: '5%',
};

const secondColumn = {
  width: "45%",
  minheight: "100%",
  paddingLeft: "5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
};
