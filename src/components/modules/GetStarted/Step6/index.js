import React from "react";
import "../GetStarted.css";
import Btn from "../../../elements/Button"

function Step6() {
  return (
    <div class="flex flex-col justify-center items-center gap-y-12">
        <div>
            <h2 class="mt-10 mb-5">
                <span>Thank you for contacting us!</span>
            </h2>
            <h3>We will contact you for further more process.</h3>
        </div>
      <Btn label="Go to Home" to="/"></Btn>
    </div>
  );
}

export default Step6;
