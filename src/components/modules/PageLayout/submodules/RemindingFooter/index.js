import React from "react";
import Button from "../../../../elements/Button";
import "./style.css";

function RemindingFooter() {
  return (
    <div className="box">
      <div className="childContainer">
        <div className="firstColumn">
          <h2>
            Ready to
            <br />
            <span>Start Ordering</span>?
          </h2>
          <p class="py-5">
            Register and get your own company portal for <span>free</span>!
            <br />
            No payment is required to get started.
          </p>
          <Button label={"Get Started"} to="/getStarted" />
        </div>
        <div className="secondColumn">
          <div>
            <h2>
              Want to <span>know</span>
              <br />
              how it works?
            </h2>
            <p class="py-5">Experience a quick interactive demo!</p>
          </div>
          <Button label={"View Demo"} to="/demo" />
        </div>
      </div>
    </div>
  );
}

export default RemindingFooter;
