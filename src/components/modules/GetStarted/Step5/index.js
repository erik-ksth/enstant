import React from "react";
import "../GetStarted.css";
import "../../../../index.css";

function Step4() {
  return (
    <>
      <h2>
        Questions or Comments
      </h2>
      <p className="description">(Optional)</p>
      <textarea id="comments" name="comments" rows="5"></textarea>
    </>
  );
}

export default Step4;
